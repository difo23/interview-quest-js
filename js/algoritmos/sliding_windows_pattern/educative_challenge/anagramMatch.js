let st = 'abbcabc',
	pt = 'abc';

let anagramMatch = (st, pt) => {
	let frecChar = {},
		ptSet = new Set(pt),
		start = 0,
		countMatch = 0,
		indexMatch = [];

	for (let e of pt) {
		if (!(e in frecChar)) {
			frecChar[e] = 0;
		}
		frecChar[e] += 1;
	}

	for (let end = 0; end < st.length; end++) {
		let endChar = st[end];
		if (endChar in frecChar) {
			frecChar[endChar] -= 1;
			if (frecChar[endChar] === 0) {
				countMatch += 1;
			}
		}

		if (countMatch === ptSet.size) {
			indexMatch.push(start);
		}

		if (end >= pt.length - 1) {
			let startChar = st[start];
			start += 1;
			if (startChar in frecChar) {
				if (frecChar[startChar] === 0) {
					countMatch -= 1;
				}
				frecChar[startChar] += 1;
			}
		}
	}

	return indexMatch;
};

console.log(anagramMatch(st, pt));
