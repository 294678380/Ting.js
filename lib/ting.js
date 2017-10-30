
var ting_class = require("./ting_class");
var toString = Object.prototype.toString;
var Doc = require("../doc/");
var proto = exports = module.exports = {};
/**
	入口函数
	@param app{Object} express的app对象，将在proto中挂载
	@param _routes{function} 路由处理将传入proto.use方法设置路由
	@param opt{Object} 文档的初始配置
*/
proto.init = function(app,routes,opt){
	if(!app && toString.call(app) != '[object Function]'){
		proto.error("Incoming correct 'app'");
		return;
	}
	if(!routes && toString.call(routes) != '[object Function]'){
		proto.error("Incoming correct 'routes'");
		return;
	}
	//设置路由
	this._app = app;
	this._routes = routes;
	this._doc = opt;
	this._opt = opt;
	this.routes();
	//需要生成文档
	if(!!opt.doc){
		this.setdoc();

	}
	return this._doc;
}
/*
	
	处理Doc调用
*/
proto.setdoc = function(){
	if(!this._opt.doc.path){
		this.error("doc.path is undefined");
		return false;
	}
	if(this._opt.doc.addFiles){
		for(name in this._opt.doc.addFiles){
			Doc[name] = this._opt.doc.addFiles[name];
		}
	}
	if(Array.isArray(this._opt.doc.files)){
		this._opt.doc.files.forEach((value)=>{
			Doc[value](this._doc,this._opt);
		});
	}
}
/*
	
	这个方法被proto.routes调用，
	@return 返回设置routes的函数调用
*/
proto.use = function(){
	let self = this;
	//这个方法挂载在ting(routes)中 传入了routes对象
	return function(_routes){
		//koa处理方式
		let node_version = process.versions.node.split(".");
			if(self._opt.tfor){
				if(self._opt.tfor === "koa" && node_version[0] > 6 && node_version[1] > 0){
					self._app.use(self.koa_use(_routes));
				}
				return true;
			}
		//express处理方式
		_routes.forEach((value)=>{
			if(typeof(value.brie) != 'string'){
				proto.error("Incoming correct 'brie'");
			}
			if(typeof(value.desc) != 'string'){
				proto.error("Incoming correct 'desc'");
			}
			let path = value.path;
			//处理一级router文档
			self.doc(value);
			//处理类
			let router = ting_class.init(value.class,value.rules);
			//调用express的use
			self._app.use(path,router);
		});
	}
}
/*
	
	转换koa需要的routes格式
	@param router{Object} 可用的router对象
	@return all_routes 转换后的routes对象
*/
proto.koa_transform_routes = function(_routes){
	let all_routes = [];
	//转换routes
	_routes.forEach(function(router){
		if(!router.rules){
			router.rules = router.class.rules;
		}
		Object.keys(router.rules).forEach((item)=>{
			if(Array.isArray(router.rules[item])){
				router.rules[item].forEach((rule)=>{
					let path = router.path.trim()+rule.path.trim();
					if(router.path == "/" && rule.path == "/"){
						path = "/";	
					}
					all_routes.push({
						path:path,
						method:item,
						controller:rule.controller,
						class:router.class
					})
				});
			}
		});
	});
	return all_routes;
}
/*
	
	这个方法在使用koa作为主框架时调用
	@param router{Object} 可用的router对象
	@return 
*/
proto.koa_use = function(_routes){
	let all_routes = this.koa_transform_routes(_routes);
	return async function(ctx,next){
		let method = ctx.method.toLowerCase();
		let path = ctx.path;

		//判断path和method
		for(let i=0;item=all_routes[i++];){
			let C = new item.class();
			if(path[path.length-1] === "/"){
				path = path.substring(0,path.length-1);
			}
			if(item.path[item.path.length-1] === "/"){
				item.path = item.path.substring(0,item.path.length-1);
			}
			if(method === item.method && path === item.path){
				if(Array.isArray(item.controller)){
					item.controller.forEach(function(func){
						if(typeof func === "string"){
							C[func](ctx,next);
						}else{
							func(ctx,next)
						}
					})
				}
				break;
			}
		}
	}
}
/**
	路由处理,调用传入proto.use()返回的函数设置路由
	this._routes调用的是初始化ting(app,routes,opt)传入的routes函数
*/
proto.routes = function(){
	this._routes(this.use());
}
/**
	集成单个router
	@param router {Object} 传入单个router配置
	@return {Object} 返回单个router的文档信息
*/
proto.doc = function(router){
	var doc_obj = {
		"brie":router.brie,
		"desc":router.desc,
		"path":router.path,
		"class":[]
	}
	//处理类的文档信息
	ting_class.doc(doc_obj);

	if(!this._doc.pages){
		this._doc.pages = [];
	}
	this._doc.pages.push(doc_obj);
	return doc_obj;
}
/*
	proto.error

*/
proto.error = function(msg){
	throw new Error(msg);
}