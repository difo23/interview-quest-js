/**
 Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

let arr = [ -1, 0, 1, 2, -1, -4 ];

const threeSum = (arr, target = 0) => {
	let arrMap = new Map();
	const len = arr.length - 1;
	let arrSet = new Set();

	//target -fijo -x = y
	for (let j = 1; j <= len; ++j) {
		if (arrMap.has(target - arr[0] - arr[j])) {
			let fijo = arr[0];
			let x = arr[j];
			let y = target - arr[0] - arr[j];
			arrSet.add([ fijo, x, y ]);
		} else {
			arrMap.set(arr[j], j);
		}
	}
	return arrSet;
};

console.log(threeSum(arr, -3));
