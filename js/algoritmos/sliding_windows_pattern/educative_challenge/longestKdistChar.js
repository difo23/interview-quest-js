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

const longest_substring_with_k_distinct = function(str, k) {
	// TODO: Write your code here

	let hashStr = {};
	let start = 0;
	let maxLength = 0;

	for (let end = 0; end < str.length; ++end) {
		let endChar = str[end];

		if (!(endChar in hashStr)) {
			hashStr[endChar] = 0;
		}
		hashStr[endChar] += 1;

		while (Object.keys(hashStr).length > k) {
			let startChar = str[start];
			hashStr[startChar] -= 1;
			if (hashStr[startChar] === 0) {
				delete hashStr[startChar];
			}
			++start;
		}

		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
};

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);
