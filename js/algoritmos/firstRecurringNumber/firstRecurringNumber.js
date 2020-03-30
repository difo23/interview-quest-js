let arr = [ 3, 1, 4, 6, 7, 4 ];
//Result 4
/**
 * Debemos buscar la primera  repeticion en el arreglo
 * Usamos la estructura de datos set en js
 */

let firstRecurringNumber = (arr) => {
	let setArr = new Set();

	for (let e of arr) {
		if (setArr.has(e)) {
			//retorno la primera repeticion de e
			return e;
		}
		setArr.add(e);
	}
	return undefined;
};

console.log('Resulatado 1:', firstRecurringNumber(arr));
