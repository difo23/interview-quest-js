let arr = [];

for (let i = 1; i <= 80; ++i) {
	if (i === 8) {
		arr.push(0);
	} else {
		arr.push(i);
	}
}

let findMissedNumber = (arr) => {
	let n = arr.length;
	let sum = n * (n + 1) / 2;
	let realSum = 0;

	for (let num of arr) {
		realSum += num;
	}

	return sum - realSum;
};

console.log(findMissedNumber(arr));
