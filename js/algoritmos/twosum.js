/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 
var twoSum = function(nums, target) {
	const mins = nums.filter((num) => nums.includes(target - num));
	const one = mins[0];
	const two = mins.find((min) => min + one == target);
	return [ nums.indexOf(one), nums.indexOf(two) ];
};

console.log(twoSum([ 2, 7, 7, 11, 7 ], 9));
// resp. [ 0, 1 ]
