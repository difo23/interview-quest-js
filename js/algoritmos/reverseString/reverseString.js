let st = 'Hi my name is Andrei';

const reverseStringFor = (st) => {
	let stSolucion = '';
	for (let i = st.length - 1; i >= 0; --i) {
		stSolucion += st[i];
	}
	return stSolucion;
};

const reverseStringMap = (st) => {
	const stSolution = st
		.split('')
		.map((e, i, arr) => {
			return arr[arr.length - 1 - i];
		})
		.join('');

	return stSolution;
};

const reverseStringMethod = (st) => {
	return st.split('').reverse().join('');
};

console.log(reverseStringFor(st));
console.log(reverseStringMap(st));
console.log(reverseStringMethod(st));
