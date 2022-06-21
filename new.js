function mynew(constructor) {
	/*
	1. 新建对象
	2. 将新对象设置成constructor的this
	3. 连接新对象的[[prototype]]是constructor的原型对象
	4. 如果constructor返回原始值，则返回新对象
	5. 如果constructor返回对象，则返回这个对象
	*/
	var newObj = {};
	newObj.__proto__ = constructor.prototype;
	var res = constructor.apply(newObj, [].slice.call(arguments));
	if (typeof res == 'object') {
		return res;
	} else {
		return newObj;
	}
}

export { mynew }
