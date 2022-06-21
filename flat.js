// 数组扁平化
// ES2018自带了Array.prototype.flat(arr, depth = 1)方法
function _flatArray(array, depth = 1) { // 巧用concat方法
	// concat方法不修改原数组，返回浅拷贝的新数组
	// cancat参数可以是值，也可以是一个数组
	// 如果是值，直接插入，如果是数组，处于一维的元素将被插入（利用这个特性），例如
	// [1].concat(2,[3,[4]]) 返回 [1,2,3,[4]]
	var arr = [].concat(...array); // 已经进行了一次扁平化
	while (
		arr.some(item => Array.isArray(item)) &&
		(depth === Infinity || depth-- > 1)
	) {
		arr = [].concat(...arr);
	}
	return arr;
}

function flatArray(arr, depth = 1) { // 常规的递归方法
	// Infinity自增或自减还是Infinity
	if (depth < 1) return arr;
	var res = [];
	arr.forEach(item => {
		if (Array.isArray(item)) {
			res = res.concat(flatArray(item, depth - 1));
		} else {
			res.push(item);
		}
	});
	return res;
}

export { flatArray }
