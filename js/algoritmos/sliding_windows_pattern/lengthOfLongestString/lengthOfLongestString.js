/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
	return s
		.split('') // transform to array
		.filter((ch, i) => !s.substring(i + 1, s.length).split('').includes(ch)).length; //end filter // length of filter result
};

console.log(lengthOfLongestSubstring('abbdbb'));

function longest_substring_with_k_distinct(str, k) {
	let windowStart = 0,
		maxLength = 0,
		charFrequency = {};

	// in the following loop we'll try to extend the range [window_start, window_end]
	for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
		const rightChar = str[windowEnd];
		if (!(rightChar in charFrequency)) {
			charFrequency[rightChar] = 0;
		}
		charFrequency[rightChar] += 1;
		// shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
		while (Object.keys(charFrequency).length > k) {
			const leftChar = str[windowStart];
			charFrequency[leftChar] -= 1;
			if (charFrequency[leftChar] === 0) {
				delete charFrequency[leftChar];
			}
			windowStart += 1; // shrink the window
		}
		// remember the maximum length so far
		maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
	}

	return maxLength;
}

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);

/**
 * 
 * Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

 */

let longestKSubstring = (st, k) => {
	let start = 0,
		maxLength = 0; // una ventana muy grande

	let mapFrecuency = {};

	for (let end = 0; end < st.length; ++end) {
		let charRigth = st[end];

		if (!(charRigth in mapFrecuency)) {
			mapFrecuency[charRigth] = 0;
		}

		mapFrecuency[charRigth] += 1;

		while (Object.keys(mapFrecuency).length > k) {
			let charLeft = st[start];
			mapFrecuency[charLeft] -= 1;

			if (mapFrecuency[charleft] === 0) {
				delete mapFrecuency[charleft];
			}
			start += 1;
		}
		Math.max(maxLength, end - start + 1);
	}
};
