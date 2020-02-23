/**
 * Given an array of n elements, where each element is at most k away from
 * its target position, devise an algorithm that sorts in O(n log k) time.
 * For example, let us consider k is 2, an element at index 7 in the sorted
 * array, can be at indexes 5, 6, 7, 8, 9 in the given array.
 * 
 */

/*Input : arr[] = {6, 5, 3, 2, 8, 10, 9}
            k = 3 
Output : arr[] = {2, 3, 5, 6, 8, 9, 10}

Input : arr[] = {10, 9, 8, 7, 4, 70, 60, 50}
         k = 4
Output : arr[] = {4, 7, 8, 9, 10, 50, 60, 70}
*/

let sortByLimit = (linf, lsup, arr) => {
	const new_arr = arr.slice(linf, lsup);
	const sort_arr = new_arr.sort((a, b) => {
		return a - b;
	});
	return [sort_arr[0], [ ...sort_arr.slice(1, lsup), ...arr.slice(lsup, arr.length) ]];
};

let sortNearlyK = (arr, k) => {
	const lsup = k + 1;
	let process = [];
	let arr_mutable = [...arr];

	return arr.map ( ()=>{
		process = sortByLimit(0, lsup, arr_mutable);
		arr_mutable = process[1];
		console.log(process[0],process[1] )
		return process[0];
	 })
	
	
};
//let arr = [ 10, 9, 8,7, 80, 70, 60, 4, 40 ]
let arr = [ 40, 4, 60, 70, 80, 7, 8, 9, 10 ];
let k = 3;
//let arr = [ 6, 5, 3, 2, 8, 10, 9 ];
//let k = 2;
//  let arr = [ 10, 9, 8, 7, 4, 70, 60, 50 ];
//  let k = 4
console.log(arr , k)
console.log(sortNearlyK(arr, k));
