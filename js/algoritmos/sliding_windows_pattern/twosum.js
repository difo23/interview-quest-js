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

console.log(twoSum([ 2, 6, 4, 11, 7 ], 9));
// resp. [ 0, 1 ]

//Solucion sin map o filter TC O(n) SC O(1)
// Esta solucion necesita que el arreglo este ordenado
// Uso [...arr] para crear un objeto distinto.

let twoSumOn = (arr, target) => {
	//first thing is sorted my arr
	let arrSorted = [ ...arr ].sort((a, b) => a - b);
	let left = 0;
	let currentSum = 0;

	//Importante en indice de la derecha es igual al tam arreglo
	let rigth = arrSorted.length - 1;

	//explore my arr from lef and rigth index element
	while (left < rigth) {
		currentSum = arrSorted[left] + arrSorted[rigth];

		if (currentSum === target) {
			left = arr.indexOf(arrSorted[left]);
			rigth = arr.indexOf(arrSorted[rigth]);

			return [ left, rigth ];
		}

		if (currentSum > target) {
			rigth -= 1;
		} else {
			left += 1;
		}
	}

	return [ -1, -1 ];
};

console.log(twoSumOn([ 2, 6, 4, 11, 7 ], 9));

// Solucion con Hash Table, usando object map en js OJO MAS INGENIOSA

const twoSumHash = (arr, target) => {
	//Creo un objeto map en donde key seran el valor del arr,
	// y su valor sera el index de arr
	let arrMap = new Map();

	for (let i = 0; i < arr.length; ++i) {
		// primera condicion encontrar el valor x = target - y
		if (arrMap.has(target - arr[i])) {
			let x = arrMap.get(target - arr[i]);
			return [ x, i ];
		} else {
			arrMap.set(arr[i], i);
		}
	}
};

console.log(twoSumHash([ 2, 6, 4, 11, 7 ], 9));
