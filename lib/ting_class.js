var express = require("express");
var Interface = require("./interface");

var mixin = require('merge-descriptors');
var toString = Object.prototype.toString;
var slice = Array.prototype.slice;
/**
	处理router中的class类
	生成更详细的doc
	this指向proto
*/
var tc = exports = module.exports = {}

/**
	加载express路由类
	@param C {Class} 传入router处理类
	@param rules {Object} 如果入口配置中有rules 则使用入口配置
	@return {function} 返回了tc.router的处理结果，结果是一个express的router对象
*/
tc.init = function(C,rules){
	//设置方法接口
	tc.interface(C);
	this._className = getFnName(C);
	this._handler = new C();
	this._controllers = [];
		//调用入口类，如果它有定义的话
		!this._handler.main?this._handler:this._handler.main();
		let _rules = this._handler.rules;
		//如果在router中定义rules
		!rules?_rules:_rules=rules;
		//如果在类中定义rules
		!_rules?_rules=C.rules:_rules;
		if(!_rules || typeof(_rules) != "object"){
			throw new TypeError("rules type is Object or Array");
			return;
		}
		this._rules = _rules;
		//处理router
		return this.router();
}
/**
	给原始类设置方法接口
*/
tc.interface = function(C){
	//绑定interface方法
	mixin(C.prototype,Interface,false);
}
/**
	将类生成router 返回的router处理方法
	@return 结果是一个expreee的router对象
*/

tc.router = function(){
	let self = this;
	var router = express.Router();
	if(Array.isArray(self._rules)){
		self._rules.forEach((value)=>{
			//调用express的router
			router[value.method].apply(router,set_router(self,value));

		});
	}
	else
	{

		for(name in self._rules){
			let controllers = self._rules[name];
				controllers.forEach((value)=>{
					router[name].apply(router,set_router(self,value));
				});
			
		}
	}
	return router;
}
/**
	代码扩展
	@param rule{Object} 当前路由的对象
*/
tc.code = function(rule){
	if(!rule.Examination){
		rule.codeView = "[native code]";
	}
	
}
/**
	生成router内部api的文档信息
*/
tc.doc = function(doc_obj){

	doc_obj.class = this._className;
	doc_obj.rules = this._rules;
}
/**
	处理router的方法依赖
	@param self{Object} tc对象
	@param value{Object} 传入单个rule对象
*/
function set_router(self,value){
	value.codeView = [];
	let args = [];
	try{
		args.push(value.path);
		//传入了单个controller 
		if(!Array.isArray(value.controller)){
			value.controller = [value.controller];
		}
		getController(self,value);
		args = args.concat(value.controller);
	}catch(e){
		throw new TypeError(e);
	}
		self.code(value);
	return args;
}
/**
	设置express controller
	@param self {Object} tc对象
	@param value {Object} 路由配置对象
*/

function getController(self,value){
	let before = false;
	//绑定this为_handler,如果controller是字符串，那么指定类方法到绑定的controller
		value.controller.forEach((fn,index)=>{
			let fn_name = "";
			try{
			//绑定this为_handler,如果controller是字符串，那么指定类方法到绑定的controller
				if(toString.call(fn) === "[object String]"){
						fn_name = fn;
						fn = self._handler[fn];
				}
				//如果有ver规则
				if(!!value.ver){
					before = function(req,res,next){
						req._typeError = false;
						var _handler = this;
						for(name in value.ver){
							_handler.ver(req,value.ver[name],name);
						}
					}
				}
				if(!!fn){
					value.codeView[index] = fn.toString();
				}
				//合并
				if(!!before){
					fn = func_before(fn,before);
				}
				value.controller[index] = fn.bind(self._handler);
			}
			catch(e){
				throw new Error("this function is not define and his it name is "+fn_name+" and error logs is "+e);
			}
		});
}
/**
	在函数之前添加职责
	@param self {function} 当前函数
	@param before {function} 职责函数
	@return 返回合并后的函数
*/
 function func_before(self,before){
	var fn = (self==undefined?function(){}:self);
	var _this = this;
	return function(){
		var args = slice.call(arguments,0);
		before.apply(this,args);
	var context = fn.apply(this,args);
		return context;
	};
}
/*
	获取函数名称
	@param fn {function} 传入函数
	@return {String} 返回函数名
*/
function getFnName(fn){
    return fn.name || fn.toString().match(/function\s*([^(]*)\(/)[1]
}
