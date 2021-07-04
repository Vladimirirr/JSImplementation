function call(ctx, fn, ...ags){
	ctx = Object(ctx);
	// var $prop=Symbol(); // 可以使用符号当作属性
	ctx['$prop'] = fn;
	let res;
	let code;
	if (ags.length == 0){
		code=`ctx['$prop']()`;
	}else{
		let neededAgs = [];
		for (let i=0; i<ags.length; i++){
			neededAgs.push(`ags[${i}]`);
		}
		code=`ctx['$prop'](${neededAgs.join(',')})`;
	}
	res = eval(code);
	delete ctx['$prop'];
	return res;
};

function apply(ctx, fn, ags){
	ctx = Object(ctx);
	if (!Array.isArray(ags)){
		ags = [];
	}
	// var $prop = Symbol();
	ctx['$prop'] = fn;
	let res; // 保存函数的返回值
	// 旧时的ES5方法，同上的call
	/*
	let code;
	if (ags.length == 0){
		code=`ctx['$prop']()`;
	}else{
		let neededAgs=[];
		for (let i=0; i<ags.length; i++){
			neededAgs.push(`ags[${i}]`);
		}
		code=`ctx['$prop'](${neededAgs.join(',')})`;
	}
	res = eval(code);
	*/
	res = ctx['$prop'](...ags); // 使用ES6的展开运算符，替代eval
	delete ctx['$prop'];
	return res;
};

export {call, apply}
