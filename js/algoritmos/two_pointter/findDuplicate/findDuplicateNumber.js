/** 
 * Find Duplicate Number
 * 
 * Given an Array nums containing n + 1 integers where each interger is 
 * between 1 and n (inclusive), prove that at least one duplicate number
 * must exist. Assume that there is only one duplicate number, 
 * find the duplicate one.
 * 
 * example 1:
 * input: [1,3,4,2,2]
 * output: [2] 
*/

//Solucion con find and includes.

let findDuplicatedNumber = (nums) => {
	// return duplicated number or undefined
	return nums.find((num, i, arr) => arr.slice(i + 1, arr.length).includes(num));
};

let arr = [ 4, 1, 1, 2, 3 ];

//console.log(findDuplicatedNumber(arr));

// Encontrado usando el algoritmo de Floyd

let findDuplicateFloyd = (nums) => {
	if (!nums.length) return nums;
	const prt1 = setSame(setFast(nums));
	return prt1;
};

let setFast = (nums) => {
	let s = nums[0]; // una vez
	let f = nums[0];

	do {
		f = nums[nums[f]];
		s = nums[s];
	} while (s !== f);

	return { s, nums };
};

let setSame = (props) => {
	let s = props.s;
	let f = props.nums[0];

	while (s !== f) {
		f = props.nums[f];
		s = props.nums[s];
	}

	return s;
};

console.log(findDuplicateFloyd(arr));
