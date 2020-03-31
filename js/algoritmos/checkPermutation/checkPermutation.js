// Dos solucines con map y con ASCII char

let checkPermutation = (st, ts) => {
	let stmap = new Map();
	if (st.length !== ts.length) return false;

	// creo un contador de caracteres para el primer st
	for (s of st) {
		if (!stmap.has(s)) {
			stmap.set(s, 1);
		} else {
			let v = stmap.get(s);
			++v;
			stmap.set(s, v);
		}
	}
	console.log('Incio', stmap);
	// Compruebo que los caracteres esten incluidos dentro
	for (s of ts) {
		if (stmap.has(s)) {
			let v = stmap.get(s);
			if (!v) {
				console.log('caracteres de mas!', s);
				return false;
			}
			--v;
			stmap.set(s, v);
		} else {
			console.log('No existe este caractert', s);
			return false;
		}
		console.log(stmap);
	}

	return true;
};

console.log(checkPermutation('sccs', 'cscs'));

// Check permutatuib con ASCII table

let checkPermutationASCII = (st, ts) => {
	const CHAR_ASCII = 255;
	let chars = new Array(CHAR_ASCII);

	if (st.length !== ts.length) return false;

	for (s of st) {
		let code = s.charCodeAt(0);
		if (chars[code]) {
			++chars[code];
		} else {
			chars[code] = 1;
		}
	}

	for (s of ts) {
		let code = s.charCodeAt(0);
		if (chars[code]) {
			--chars[code];
		} else {
			return false;
		}
	}

	return true;
};

console.log(checkPermutationASCII('vcaa', 'acvv'));

module.exports = checkPermutation;
