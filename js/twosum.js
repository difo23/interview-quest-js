/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const mins = nums.filter((num) => num <= target);

	return mins.filter((num, i) => {
		if (mins.includes(target - num)) {
			return [ i, mins.indexOf(target - num) ];
		}
	});
};

console.log(twoSum([ 2, 7, 11, 15 ], 9));
// resp. [ 2, 7 ]