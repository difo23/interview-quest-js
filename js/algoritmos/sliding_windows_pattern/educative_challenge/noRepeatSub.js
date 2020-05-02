/**
 * Given a string, find the length of the longest substring which has no repeating characters.
 */

/**
    * Input: String="aabccbb"
    * Output: 3
    * Explanation: The longest substring without any repeating characters is "abc".
  */

/**
    * Input: String="abbbb"
    * Output: 2
    * Explanation: The longest substring without any repeating characters is "ab".
   */

let st = 'abcade';

let noRepeatChar = (st) => {
	let indexChar = {};
	let max = 0;
	let start = 0;

	for (let end = 0; end < st.length; end++) {
        let endChar = st[end];
        
        if(endChar in indexChar){

            start = Math.max(start, indexChar[endChar]+1)

        }
        indexChar[endChar] = end;

		max = Math.max(max, end - start + 1);
	}

	return max;
};

console.log(noRepeatChar(st));
