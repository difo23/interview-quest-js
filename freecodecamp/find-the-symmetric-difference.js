function sym(args) {
  
  let result = new Set(args);

  for (let i = 1; i < arguments.length; i++){
    let set = new Set(arguments[i]);
    for (let e of set){
      if(!(result.has(e))){
        result.add(e)
      }else if(result.has(e)){
        result.delete(e)
      }
    }
  }

  return Array.from(result).sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);
