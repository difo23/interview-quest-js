/*
    Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

    Example 1:
        Input: [3, 3, 2, 1, 3, 2, 1]
        Output: [1, 1, 2, 2, 3, 3, 3]
*/

let nums = [ 3, 3, 2, 1, 3, 2, 1 ];

let threeUniqueNumbers = (nums) => {
	let arr = [ [], [], [] ];

	for (num of nums) {
		arr[num - 1].push(num);
	}

	return [].concat(...arr);
};

console.log(threeUniqueNumbers(nums));
