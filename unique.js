// 数组去重
// 最简单的方法：return Array.from(new Set(arr)); // or return [...new Set(arr)];
function _unique(arr) { // 使用includes或indexOf方法
	var res = [];
	for (let i = 0; i < arr.length; i++) {
		if (!res.includes(arr[i])) { // or res.includes(arr[i]) == -1
			res.push(arr[i]);
		}
	}
	return res;
}

function unique(arr) { // 使用splice方法
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j, 1);
				j--;
			}
		}
	}
	return arr;
}

export { unique }
