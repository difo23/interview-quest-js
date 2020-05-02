//Ejercicio 3
/*
Longest Substring with K Distinct Characters (medium)
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa"

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

let longestKDistChar = (arr, k) => {
	let frecuencyChar = {};
	let start = 0;
	let longest = 0;

	for (let end = 0; end < arr.length; end++) {
		let endchar = arr[end];

		if (!(endchar in frecuencyChar)) {
			frecuencyChar[endchar] = 0;
		}

		frecuencyChar[endchar] += 1;

		while (Object.keys(frecuencyChar).length > k) {
			let startchar = arr[start];
			frecuencyChar[startchar] -= 1;
			if (frecuencyChar[startchar] === 0) {
				delete frecuencyChar[startchar];
			}
			start += 1;
		}

		longest = Math.max(longest, end - start + 1);
	}

	return longest;
};

let arr = 'araaci';
let k = 1;
console.log('Solucion: ', longestKDistChar(arr, k));
