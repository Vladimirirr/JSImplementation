function run(gen, ...args){ // 传入一个生成器
  var it = gen.apply(this, args);
  return new Promise((resolve, reject)=>{
    function next(data){
      var res;
      try{
        res = it.next(data); // 尝试恢复生成器的执行
      }catch(e){
        reject(e);
      }
      if (res.done){
        // 通常迭代器返回`done: true`的result是无意义的，但生成器的迭代器却是有意义的
        resolve(res.value);
      }else{
        // 对`res.value`使用`Promise.resolve`包装，确保它是一个promise
        Promise.resolve(res.value).then(
           data => next(data)
          ,err => reject(err)
        );
      }
    }
    next(); // 启动生成器
  });
}

export {run}
