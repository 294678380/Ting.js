
const ting = require("../lib/ting");
const app = require("express")();
var _routes = require("./_routes.test");

var expect = require('chai').expect;

var opt = {author:"ztf",see:"test",version:""};
var routes_testfn = function(ting){
	return ting(_routes);
}

describe("ting.init from ting.js",function(){
	let init_1 = function(){
		ting.init({},_routes,opt);
	}
	it("ting.init 传入错误的app对象时",function(){
		expect(init_1)
		.to.throw(Error);
	});

	let init_2 = function(){
		ting.init(app,{},opt);
	}
	it("ting.init 传入错误的routes对象时",function(){
		expect(init_2)
		.to.throw(Error);
	})

	
	let init_3 = function(){
		let returnObj = ting.init(app,routes_testfn,opt);
		return returnObj.pages[0].class === "Test";
	}
	it("ting.init 传入正确的参数",function(){
		expect(init_3())
		.to.be.true;
	})
});

describe("ting.use from ting.js",function(){
	it("ting.use 返回设置routes的函数调用",function(){
		expect(ting.use())
		.to.be.an("function");
	});

	let use = function(self){
		let _ting_routes = ting.use.call(self); //返回了函数调用
			if(self._opt.tfor === "koa"){
				if(_ting_routes){
					return true;
				}
				return false;
			}else{
				_ting_routes(_routes);		//调用测试
				if(self.path == "/" && typeof(self.router) == "object"){
					return true;
				}
				return false;
			}
	}
	it("ting.use 传入_routes配置信息时，app.use应该生成对应的layer == 当模式为express时",function(){
		expect(use({   //我需要传入测试用的上下文app对象
			_app:{
				use:function(path,router){
					this.path = path;
					this.router = router;
				}
			},
			_opt:{
				tfor:"express"  //express模式
			},
			doc:function(){}
		})).to.not.be.true;
	});
	it("ting.use 传入_routes配置信息时，app.use应该生成对应的layer == 当模式为koa时",function(){
		expect(use({   //我需要传入测试用的上下文app对象
			_app:{
				use:function(path,router){
					this.path = path;
					this.router = router;
				}
			},
			_opt:{
				tfor:"koa"  //express模式
			},
			koa_use:ting.koa_use.bind(ting),
			doc:function(){}
		})).to.be.true;
	});
});

describe("ting.routes from ting.js",function(){
	it("ting.routes调用ting.use返回的对象",function(){

	})
});


describe("ting.doc from the ting.js",function(){
	let doc = function(){
		var returnObj = ting.doc(_routes[0]);
		return returnObj.class === "Test";
	}
	it("ting.doc 传入单个router 生成单个router的文档",function(){
		expect(doc())
		.to.be.true;
	})
});

describe("ting.koa_transform_routes from the ting.js",function(){
	let transform = function(){
		var returnObj = ting.koa_transform_routes(_routes);

		return returnObj[0].path === "/" && returnObj[0].method === "post";
	}
	it("传入正确的routes，返回生成后的适用于koa的router对象",function(){
		expect(transform())
		.to.be.true;
	})
});