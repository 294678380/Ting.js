
const ting = require("..");
const app = require("express")();
var _routes = require("./_routes.test");

var expect = require('chai').expect;

var opt = {author:"ztf",see:"test",version:""};
var routes_testfn = function(ting){
	return ting(_routes);
}

describe("ting()",function(){
	var ting_test = function(){
		var returnObj = ting(app,routes_testfn,opt);
		return returnObj.pages[0].class === "Test";
	}
	it("传入正确的配置，应该返回正确的项目doc对象",function(){
		expect(ting_test())
		.to.be.true;
	});

});