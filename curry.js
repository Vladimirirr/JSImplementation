function curry(fn, args = []) { // fn的参数必须显示给出
	var length = fn.length;
	return function(){
		var _args = args.concat(Array.from(arguments));
		if (_args.length < length){
			return curry.call(this, fn, _args);
		}
		else{
			return fn.apply(this, _args);
		}
	};
}

export {curry}
