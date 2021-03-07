//Ejercicio 1
/***
 * Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 * input : [2,1,5,1,3,2] k = 3 
 * output: 9
 * Explicacion: El subarray maximo es la suma [5,1,3]
 */

function maxSumK(arr, k) {
	let sum = 0;
	let max = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (i >= k - 1) {
            		max = Math.max(max, sum);
           		//Colocar los (-k-1) entre parentesis es importante
			sum -= arr[i - (k - 1)];
		}
	}
	return max;
}

let arr = [ 2, 1, 5, 1, 3, 2 ];
let k = 3;
console.log(maxSumK(arr, k));



