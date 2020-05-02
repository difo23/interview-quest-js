//Ejercicio 2
/**
 * Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
 * 
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].

 */

let arr = [ 3, 4, 1, 1, 6 ];
let s = 8;

function smallestSum(arr, s) {
	let start = 0;
	let sum = 0;
	let smallest = Infinity;
	for (let end = 0; end < arr.length; end++) {
		sum += arr[end];
		while (sum >= s) {
			smallest = Math.min(smallest, end - start + 1);
			sum -= arr[start];
			start += 1;
		}
	}
	return smallest;
}

console.log('Solucion: ', smallestSum(arr, s));
