/**
	类方法接口
*/
var toString = Object.prototype.toString;
var inter = exports = module.exports = {

}
/**
	验证请求对象上的object参数的正确性
	@param parentObj {Object} 父级对象
	@param rule {Object} 验证规则对象
	@param obj_name {String} 验证对象名称
	@param parentName {String} 验证对象父对象名称
*/
inter.ver = function(parentObj,rule,obj_name,parentName){
	let _err = {
		fieldName:"",
		msg:""
	}
	let proto = parentObj[obj_name];
	!parentName?parentName="":parentName;
	for(name in rule){
		//不存在
		if(proto[name] === undefined){
			_err.fieldName = `${parentName}.${obj_name}.${name}`;
			_err.msg = `${_err.fieldName} is undefined`;
			parentObj._typeError = _err
			return;
		}
		let rule_type = toString.call(rule[name]);
		//设置的正则验证
		let val = rule[name];
		if(rule_type === "[object RegExp]"){
				if(!val.test(proto[name])){
					_err.fieldName = `req.${obj_name}.${name}`;
					_err.msg = `${_err.fieldName} Validation failure`;
					parentObj._typeError = _err;
					return;
				}
		}
		//设置的函数验证 直接返回处理的结果
		if(rule_type === "[object Function]"){
			let _val = val.call(parentObj,proto[name],proto);
				if(_val === false){
					parentObj._typeError = true;
					return;
				}else if(_val != true){
					parentObj._typeError = _val;
					return;
				}
		}
	}
	parentObj._typeError = undefined;
}
/**
	验证params的正确性
	@param req {Object} request请求对象
	@param params {Object} params规则
*/
inter.params = function(req,rule){
	return inter.ver(req,rule,"params","req");
	
}
/**
	验证query的正确性
	@param req {Object} request请求对象
	@param params {Object} query规则
*/
inter.query = function(req,rule){
	return inter.ver(req,rule,"query","req");
	
}