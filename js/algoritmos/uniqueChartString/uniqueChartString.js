let st = 'holaunta';


// Debes comprobar que los elementos de este string sean unicos que no se repitan.

// Solucion de fuerza bruta

let unique = (st) => {

   const arr = st.split('');
   const find = arr.find((char, i, arr)=> arr.slice(i+1, arr.length/2).includes(char))
   if(find){
        return false;
   }else{
       return true;
   }

}


let uniqueASCII = (st) => {
    const ASCII_CHAR = 128;
    
    let arr = new Array(ASCII_CHAR);
    let code;
    for (v of st){
        code = st.charCodeAt(0);
        if(arr[code]){
            return false;
        }
        arr[code] = true;
    }

    return true//

}

console.log(uniqueASCII(st))


