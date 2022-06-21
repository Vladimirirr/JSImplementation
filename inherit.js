function inherit(son, father) {
	// son和father都是构造器
	son.prototype = new father; // 或son.prototype = Object.create(father.prototype);
	son.prototype.constructor = son; // 修复constructor的丢失问题
	// son构造器通常需要添加：father.call(this, ...);
}

export { inherit }
