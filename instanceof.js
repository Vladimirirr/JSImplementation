function myinstanceof(obj, constructor){
	if (typeof constructor != 'function')
		throw TypeError('The second parameter must be a function.');
	if (constructor.prototype == undefined)
		throw TypeError('The constructor do not have the prototype.');
	// 循环判断constructor.prototype是否出现在obj的原型链上
	var thisProto = obj.__proto__;
	while (thisProto != null){
		if (obj.__proto__ == constructor.prototype)
			return true;
		thisProto = thisProto.__proto__;
	}
	return false;
}

export {myinstanceof}
