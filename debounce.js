function debounceTail(cb, timeout = 1000) { // 尾防抖
	// 调用后需要先等待timeout毫秒才触发回调
	var timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			return cb.apply(this, arguments);
		}, timeout);
	};
}

function debounceHead(cb, timeout = 1000) { // 首防抖
	// 调用后立刻触发回调
	var timer;
	function updateTimer() {
		timer = setTimeout(() => {
			timer = undefined;
		}, timeout);
	}
	return function () {
		if (timer) {
			// 还在倒计时，继续延迟计时器
			clearTimeout(timer);
			updateTimer();
		} else {
			// 触发回调
			let res = cb.apply(this, arguments);
			// 设置计时器
			updateTimer();
			return res;
		}
	};
}

export { debounceTail, debounceHead }
