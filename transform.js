// 以下的map、reduce和filter都参照lodash的源码实现
// 可以看出，函数式编程的map、reduce和filter高阶函数已经帮我们处理好了数组的迭代逻辑，让我们更好地专注于业务逻辑

function map(arr, fn){
	var
		index = -1,
		len = arr.length,
		res = new Array(len);
	while(++index < len){
		res[index] = fn(arr[index], index, arr);
	}
	return res;
}

function reduce(arr, fn, acc, initAcc){ // acc = accumulator
	var
		index = -1,
		len = arr.length;
	if(!initAcc && len > 0){ // 没给出初始值就用数组的第一个元素当做累加器acc的初始值
		acc = arr[++index];
	}
	while(++index < len){
		acc = fn(acc, arr[index], index, arr);
	}
	return acc;
}

function filter(arr, fn){
	var
		index = -1,
		len = arr.length,
		resIndex = 0,
		result = [];
	while(++index < len){
		let value = arr[index];
		if (fn(value, index, arr)){
			result[resIndex++] = value;
		}
	}
	return result;
}

// reduce是很强大的高阶函数，它还能实现map和filter
function _map(arr, fn){
	// 使用reduce实现map
	return arr.reduce((a, b)=>{
		a.push(fn(b));
		return a;
	}, []);
}
function _filter(arr, fn){
	// 使用reduce实现filter
	return arr.reduce((a, b)=>{
		if (fn(b)) a.push(b);
		return a;
	}, []);
}

export {map, reduce, filter}
