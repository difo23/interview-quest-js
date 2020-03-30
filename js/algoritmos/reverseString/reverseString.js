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

const reverseStringDestructuring = (st) => [ ...st ].reverse().join('');

console.log('Solution 1:', reverseStringMap(st));
console.log('Solution 2:', reverseStringFor(st));
console.log('Solution 3:', reverseStringMethod(st));
console.log('Solution 4:', reverseStringDestructuring(st));

module.exports = reverseStringFor;