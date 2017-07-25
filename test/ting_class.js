const tc = require("../lib/ting_class");
const app = require("express")();
var _routes = require("./_routes.test");

var expect = require('chai').expect;

var opt = {author:"ztf",see:"test",version:""};
var routes_testfn = function(ting){
	return ting(_routes);
}
class Test{
		main(){
			this.rules = _routes[0].rules
		}
	}

describe("tc.init from ting_class.js",function(){
	
	var init = function(){
		var router = tc.init(Test); //返回了函数调用
			if(typeof(router.stack) == "object"){
				return true;
			}
			return false;
	}
	it("tc.init传入class对象，返回express的roter对象，在 ting.use from ting.js调用",function(){
		expect(init()).to.be.true;
	});
});

describe("tc.interface from ting.class.js",function(){
	var _interface = function(){
		tc.interface(Test);
		return Test.prototype.ver //验证是否成功继承interface
	}
	it("传入Test类,绑定interface接口，验证是否成功继承interface",function(){
		expect(_interface())
		.to.be.ok;
	});
});	


describe("tc.router from ting.class.js",function(){
	var testRouter = function(){
		//环境
		var C = new Test();
		var self = {
			_handler:C,
			_rules:C.rules
		}
		var router = tc.router.call(self);
		if(typeof(router.stack) == "object"){
				return true;
			}
		return false;
	}
	it("生成router对象，由tc.init返回",function(){
		expect(testRouter())
		.to.be.true;
	});
});	


describe("tc.code from ting.class.js",function(){
	var code = function(){
		var rule = _routes[0].rules.post[0];
		rule.Examination = false;
		tc.code(rule);
		return rule.codeView;
	}
	it("code方法根据Examination规则将codeView转换",function(){
		expect(code())
		.to.be.equal("[native code]");
	});
});


describe("tc.doc from ting.class.js",function(){
	var doc = function(){
		//环境
		var C = new Test();
			C.main();
		var self = {
			_className:"Test",
			_rules:C.rules
		}
		var doc_obj = {
			"path":"/",
			"desc":"test",
			"class":[]
		}
		tc.doc.call(self,doc_obj);
		return doc_obj.class === "Test";
	}
	it("doc方法在ting.doc内调用，传入了单个rule的doc_obj，将类信息与处理后的_rules赋给doc对象",function(){
		expect(doc())
		.to.be.true
	});
});

