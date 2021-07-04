function throttle(cb, timeout = 200){
	// 最快触发频率是200ms
	var timer;
	function updateTimer(){
		timer = setTimeout(() => {
			timer = undefined;
		}, timeout);	
	}
	return function(){
		if (timer){
			// 还在倒计时，不予执行
		}else{
			// 触发回调
			let res = cb.apply(this, arguments);
			// 设置计时器
			updateTimer();
			return res;
		}
	};
}

export {throttle}
