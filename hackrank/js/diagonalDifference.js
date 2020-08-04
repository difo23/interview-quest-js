/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/

let diagonalDiff_f = (arr) => {
	const HIGH = 100;
	const LOW = -100;

	const ROWXCOLUMN = arr.length-1; //arr[0] - 1;

	// Constraints  100 <= element in matrix >= -100
	if (
		//arr.slice(1).filter((row) => {
		arr.filter((row) => {
			return row.filter((c) => c < LOW || c > HIGH).length > 0 ? true : false;
		}).length > 0
	) {
		return Infinity;
	}

	return Math.abs(
		arr
			//.slice(1)
			.map((row, i) => {
				return [ row[i], row[ROWXCOLUMN - i] ];
			})
			.reduce(
				(acc, value) => {
					return [ acc[0] + value[0], acc[1] + value[1] ];
				},
				[ 0, 0 ]
			)
			.reduce((acc, value) => acc - value)
	);
};

let diagonalDiff_c = (arr) => {
	const HIGH = 100;
	const LOW = -100;

	const ROWXCOLUMN = arr.length;//arr[0];

	const matriz = arr;//arr.slice(1);

	// Constraints  100 <= element in matrix >= -100

	let [ accr, accl ] = [ 0, 0 ];

	for (let [ i, j ] = [ 0, 0 ]; i < ROWXCOLUMN; j++) {
		if (matriz[i][j] > HIGH || matriz[i][j] < LOW) {
			return Infinity;
		}

		if (j === ROWXCOLUMN - 1) {
			j = 0;
			accr += matriz[i][i];
			accl += matriz[i][ROWXCOLUMN - 1 - i];
			++i;
		}
	}

	return Math.abs(accr - accl);
};

//const arr = [ 3, [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];

console.log(diagonalDiff_f(arr));
