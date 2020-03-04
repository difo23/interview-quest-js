/*
Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700
*/

let arr = [ 700, 200, 300, 400 ];
let k = 2;

// Slibing Windows

let maxSumKElements = (arr, k) => {
	let sumWindow = 0;

	if (arr.length < k) return -1;
	// Hago un recorrido de los primeros k elementos
	for (let i = 0; i < k; ++i) sumWindow += arr[i];

	let maxSumWin = sumWindow;

	// Hago un recorido de los elementos restantes
	for (let i = k; i < arr.length; ++i) {
		sumWindow += arr[i] - arr[i - k];
		maxSumWin = Math.max(sumWindow, maxSumWin);
	}
	return maxSumWin;
};

console.log(maxSumKElements(arr, k));

// Slibing Window with slice and reduce

let sumFirstWindow = (arr, k) => {
	return arr.slice(0, k).reduce((acc, next) => acc + next);
};

let maxSumWindow = (arr, k, first) => {
	let max = first;

	for (let i = k; i < arr.length; ++i) {
		first += arr[i] - arr[i - k];
		max = Math.max(first, max);
	}
	return max;
};

let maxSumKElemSlice = (arr, k) => {
	if (arr.length < k) return -1;
	const sumFirst = sumFirstWindow(arr, k);
	const maxSum = maxSumWindow(arr, k, sumFirst);
	return maxSum;
};

console.log(maxSumKElemSlice(arr, k));

//Slibing Window only one loop

let maxSumKElementsOneLoop = (arr, k) => {
	const len = arr.length;

	let max = 0;
	let sumWindow = 0;
	let elemExWin = 0;

	if (len < k) return -1;

	for (let i = 0; i < len; ++i) {
		sumWindow += arr[i];
		if (i >= k - 1) {
			max = Math.max(max, sumWindow);
			sumWindow -= arr[elemExWin]; // substraer el elemento que sale
			++elemExWin;
		}
	}

	return max;
};

console.log(maxSumKElementsOneLoop(arr, k));
