/**
    * Input: String="oidbcaf", Pattern="abc"
    * Output: true
    * Explanation: The string contains "bca" which is a permutation of the given pattern.
*/
//Caso #0 True
let st = 'oidbcaf',
	pt = 'abc';

//Caso #1 False
let st1 = '',
	pt1 = 'abc';

//Caso #2 False
let st2 = 'ccccac',
	pt2 = 'abc';

//caso #3 False
let st3 = 'odicf',
	pt3 = 'dc';

//caso #4 True
let st4 = 'bcdxabcdy',
	pt4 = 'bcdyabcdx';

//caso #5 True
let st5 = 'aaacb',
	pt5 = 'abc';

let permStringMatch = (st, pt) => {
	if (st.legth < 0 || pt.legth < 0) return false;
	let ptSet = new Set(pt);
	let frecuenciaCharPt = {};

	for (let e of pt) {
		if (!(e in frecuenciaCharPt)) {
			frecuenciaCharPt[e] = 0;
		}
		frecuenciaCharPt[e] += 1;
	}

	// Sliding Windows estrategia de busqueda

	let start = 0,
		countMatch = 0;

	for (let end = 0; end < st.length; end++) {
		let endChar = st[end];
		if (endChar in frecuenciaCharPt) {
			frecuenciaCharPt[endChar] -= 1;
			if (frecuenciaCharPt[endChar] === 0) {
				countMatch += 1;
			}
		}

		if (countMatch === ptSet.size) return true;

		if (end >= pt.length-1) {
			let startChar = st[start];
			start += 1;
			if (startChar in frecuenciaCharPt) {
				if (frecuenciaCharPt[startChar] === 0) {
					countMatch -= 1;
				}
				frecuenciaCharPt[startChar] += 1;
			}
		}
	}

	return false;
};

console.log('0', permStringMatch(st, pt));
console.log('1', permStringMatch(st1, pt1));
console.log('2', permStringMatch(st2, pt2));
console.log('3', permStringMatch(st3, pt3));
console.log('4', permStringMatch(st4, pt4));
console.log('5', permStringMatch(st5, pt5));
