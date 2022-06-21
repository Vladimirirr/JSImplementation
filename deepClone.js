function _deepCopy(s, d) {
	// s --deepCopy--> d
	for (let x in s) {
		if (d[x] === undefined) {
			if (typeof s[x] == 'object' || typeof s[x] == 'function') {
				let subType = Object.prototype.toString.call(s[x]);
				if (subType.indexOf("Array") != -1) {
					_deepCopy(s[x], d[x] = []);
				} else if (subType.indexOf("Object") != -1) {
					_deepCopy(s[x], d[x] = {});
				} else {
					d[x] = s[x];
				}
			} else {
				d[x] = s[x];
			}
		}
	}
}

function deepClone(target, cache = new Map()) {
	// 解决循环引用
	var res;
	if (cache.has(target)) return cache.get(target);
	res = Array.isArray(target) ? [] : {};
	cache.set(target, res);
	for (let key in target) {
		if (typeof target[key] == 'object') {
			res[key] = deepClone(target[key], cache);
		} else {
			// 原始数据和function直接赋值
			res[key] = target[key];
		}
	}
	return res;
}

export { deepClone }
