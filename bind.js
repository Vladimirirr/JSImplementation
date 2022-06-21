function bind(ctx, fn, ...ags) {
	// ags是科里化参数
	// bind返回的新函数也应当能够被构造
	ctx = Object(ctx);
	// Object（等价new Object）对基本数据类型返回它的包装对象，undefined和null返回空对象
	// 对对象（包括函数）返回本身
	function bound(...ags2) {
		var totalAgs = ags.concat(ags2);
		var res;
		if (this instanceof bound) {
			// bound被构造
			res = fn.apply(this, totalAgs);
		} else {
			res = fn.apply(ctx, totalAgs);
		}
		return res;
	}
	// 设置原型关系
	bound.prototype = fn.prototype;
	return bound;
};

export { bind }
