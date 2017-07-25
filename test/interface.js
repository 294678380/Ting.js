const Interface = require("../lib/interface");
const app = require("express")();
var _routes = require("./_routes.test");

var expect = require('chai').expect;

var opt = {author:"ztf",see:"test",version:""};
var routes_testfn = function(ting){
	return ting(_routes);
}
describe("Interface.ver from interface.js",function(){
	var ver = function(){
		var parentObj = {
			params:{
				test:"test"
			}
		}
		var rule = {
			test:/test/
		}
		var yzName = "params";
		Interface.ver(parentObj,rule,yzName);
		return parentObj._typeError;
	}
	it("Interface.ver传入验证对象的父级对象，验证对象的规则对象，验证对象的名称,验证错误则输出_typeError到父级对象上",function(){
		expect(ver())
		.to.be.undefined;
	});
});

describe("Interface.params from interface.js",function(){
	var params = function(){
		var req = {
			params:{
				test:"test"
			}
		}
		var rule = {
			test:/test/
		}
		Interface.params(req,rule);
		return req._typeError;
	}
	it("默认调用Interface.ver，验证请求对象中的params",function(){
		expect(params())
		.to.be.undefined;
	});
});

describe("Interface.query from interface.js",function(){
	var query = function(){
		var req = {
			query:{
				test:"test"
			}
		}
		var rule = {
			test:/test/
		}
		Interface.query(req,rule);
		return req._typeError;
	}
	it("默认调用Interface.ver，验证请求对象中的query",function(){
		expect(query())
		.to.be.undefined;
	});
});