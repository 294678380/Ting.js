const ting = require("..");
const doc = require("../doc/");
const app = require("express")();
var expect = require('chai').expect;

var _routes = require("./_routes.test");
var opt = {
	author:"ztf",
	see:"test",
	version:""
};
var routes_testfn = function(ting){
	return ting(_routes);
}
var _doc = ting(app,routes_testfn,opt);

describe("plugin-doc from /doc/index.js",function(){
	var doc_test = function(){
		var _opt = {
			doc:{
				path:"",
				files:["html"]
			},
			version:"1.0.0"
		}
		return doc.html(_doc,_opt,true)
	}
	it("这个插件用来生成文档，预制了测试方法，如果测试成功则返回正确的文件名，文件名由版本号和生成文件组成",function(){
		expect(doc_test())
		.to.be.equal("1.0.0_doc.html");
	});
});

