/**
 * k largest(or smallest) elements in an array | added Min Heap method
Question: Write an efficient program for printing k largest elements in an array. Elements in array can be in any order.
For example, if given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the largest 3 elements i.e., k = 3 then your program should print 50, 30 and 23.
 */
let kLargest = (arr, k) => {
	return arr
		.sort((num, nextnum) => {
			return nextnum - num;
		})
		.filter((num, i) => i < k);
};

let kSmallest = (arr, k) => {
	return arr
		.sort((num, nextnum) => {
			return num - nextnum;
		})
		.filter((num, i) => i < k);
};

let array = [ 1, 23, 12, 9, 30, 2, 50 ];

let k = 3;

console.log(kLargest(array, k));
//result = 50, 30, 23
console.log(kSmallest(array, k));
//result = [ 1, 2, 9 ]
