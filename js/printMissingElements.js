/**
 * Print missing elements that lie in range 0 – 99
Given an array of integers print the missing elements that lie in range 0-99. If there are more than one missing, collate them, otherwise just print the number.
Note that the input array may not be sorted and may contain numbers outside the range [0-99], but only this range is to be considered for printing missing elements.
Input: {88, 105, 3, 2, 200, 0, 10}
Output: 1
        4-9
        11-87
        89-99


Input: {9, 6, 900, 850, 5, 90, 100, 99}
Output: 0-4
        7-8
        10-89
        91-98
 * 
 */

let printMissing = (arr, end) => {
	const filter_arr = arr.filter((n) => n < end).sort((n, nextn) => {
		return n - nextn;
	});

	return filter_arr.map((n_range, i) => {
		if (n_range - 1 > 0 && i == 0) {
			return `${0} - ${n_range - 1}`;
		} else if (filter_arr[i + 1] - 1 - (n_range + 1) == 0) {
			return `${n_range + 1}`;
		} else if (filter_arr[i + 1] - 1 - (n_range + 1) > 0) {
			return `${n_range + 1} - ${filter_arr[i + 1] - 1}`;
		} else if (i == filter_arr.length - 1 && n_range < end) {
			return end - (n_range + 1) < 0 ? `${end}` : `${n_range + 1} - ${end}`;
		} else {
			return 'none';
		}
    }).filter(range => range != 'none');
    

    
};

let end = 99;
let arr = [ 88, 105, 3, 2, 200, 0, 10 ];

console.log(printMissing(arr, end));
