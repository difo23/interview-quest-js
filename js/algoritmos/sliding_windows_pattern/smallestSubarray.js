/*Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists*/

/**
 * Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 * 
 */

function smallest_subarray_with_given_sum(s, arr) {
	let windowSum = 0,
		minLength = Infinity,
		windowStart = 0;

	for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		windowSum += arr[windowEnd]; // add the next element
		// shrink the window as small as possible until the 'window_sum' is smaller than 's'
		// Este ciclo es muy importante.
		while (windowSum >= s) {
			minLength = Math.min(minLength, windowEnd - windowStart + 1);
			windowSum -= arr[windowStart];
			windowStart += 1;
		}
	}

	if (minLength === Infinity) {
		return 0;
	}
	return minLength;
}

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [ 2, 1, 5, 2, 3, 2 ])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [ 2, 1, 5, 2, 8 ])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [ 3, 4, 1, 1, 6 ])}`);

let smallestSubArrySum = (arr, s) => {
	let start = 0,
		min = Infinity,
		sum = 0;

	for (let end = 0; end < arr.length; end++) {
		sum += arr[end];

		while (sum >= s) {
			min = Math.min(min, end - start + 1);
			sum -= arr[start];
			start += 1;
		}
	}

	if (min === Infinity) {
		return 0;
	}

	return min;
};

console.log(`New Smallest subarray length: ${smallestSubArrySum([ 2, 1, 5, 2, 3, 2 ], 7)}`);
