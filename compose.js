function _compose(){ // 常规实现
	var args = arguments;
	var start = args.length - 1;
	return function(){
			var i = start;
			var result = args[start].apply(this, arguments);
			while (i--) result = args[i].call(this, result);
			return result;
	};
}

function compose(...funcs){ // reduce写法，很优美
	if (funcs.length == 0){
		return arg => arg;
	}
	if (funcs.length == 1){
		return funcs[0];
	}
	// return funcs.reduce( (a, b) => (...args) => a(b(...args)) );
	return funcs.reduce(function(a, b){
		return function(...args){
			return a(b(...args));
		};
	});
}

export {compose}
