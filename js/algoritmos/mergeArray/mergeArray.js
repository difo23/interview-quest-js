const array_one = [ 0, 3, 4 ];
const array_two = [ 4, 6, 29, 30 ];

const mergeSortedArray = (array_one, array_two) => {
	let mergeArray = [ ...array_one, ...array_two ];
	return mergeArray.sort((a, b) => a - b);
};

const mergeSorted = (array_one, array_two) => {
	if (!array_one) return array_two;
	if (!array_two) return array_one;

	let i = 0;
	let j = 0;

	let len_one = array_one.length;
	let len_two = array_two.length;
	let mergeArray = new Array(len_one + len_two);
	let newValue = 0;

	for (let c = 0; c < len_one + len_two; ++c) {
		if (array_one[i] <= array_two[j] || (j === len_two && i < len_one)) {
			newValue = array_one[i];
			++i;
		} else if (array_one[i] > array_two[j] || (i === len_one && j < len_two)) {
			newValue = array_two[j];
			++j;
		}

		mergeArray[c] = newValue;
	}

	return mergeArray;
};

console.log('Solution 1:', mergeSortedArray(array_one, array_two));
console.log('Solution 2:', mergeSorted(array_one, array_two));


module.exports =  mergeSorted;