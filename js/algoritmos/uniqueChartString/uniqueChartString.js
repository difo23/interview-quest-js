let st = 'holunt';


// Debes comprobar que los elementos de este string sean unicos que no se repitan.

// Solucion de fuerza bruta

let unique = (st) => {


    const find = st.split('').find((char, i, arr) => arr.slice(i + 1).includes(char))
    return find ? false : true;


}


let uniqueASCII = (st) => {
    const ASCII_CHAR = 128;

    let arr = new Array(ASCII_CHAR);
    let code;
    for (v of st) {
        code = v.charCodeAt();
        if (arr[code]) {
            return false;
        }
        arr[code] = true;
    }

    return true//

}

console.log(uniqueASCII(st))


