// Given a and b, determine their respective comparison points.

// Example

// a = [1, 2, 3]
// b = [3, 2, 1]
// For elements *0*, Bob is awarded a point because a[0] .
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets in the editor below.

// compareTriplets has the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Return

// int[2]: Alice's score is in the first position, and Bob's score is in the second.
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

// Constraints

// 1 ≤ a[i] ≤ 100
// 1 ≤ b[i] ≤ 100
// Sample Input 0

// 5 6 7
// 3 6 10
// Sample Output 0

// 1 1

//solucion 1 usando funcional programing

const compareTriplets_f = (a, b) => {
	const NUM_CATEGORY = 3;
	const HIGH = 100;
	const LOW = 1;

	// Constraints #1
	if (a.length !== b.length && b.length !== NUM_CATEGORY) return [ -Infinity, -Infinity ];

	//Constraints #2
	if (a.filter((ai, i) => ai < LOW || ai > HIGH || (b[i] < LOW || b[i] > HIGH)).length > 0)
		return [ -Infinity, -Infinity ];

	

	return a
		.map((ai, i) => {
			if (ai > b[i]) {
				return [ 1, 0 ];
			} else if (ai < b[i]) {
				return [ 0, 1 ];
			}
			return [ 0, 0 ];
		})
		.reduce(
			(acc, value, i) => {
				return [ acc[0] + value[0], acc[1] + value[1] ];
			},
			[ 0, 0 ]
		);
};

// solucion 2 usando programaicon imperativa
const compareTriplets_c = (a, b) => {
	const NUM_CATEGORY = 3;
	if (a.length !== b.length && b.length !== NUM_CATEGORY) return [ 0, 0 ];

	let acc_a = 0;
	let acc_b = 0;

	for (let i = 0; i < NUM_CATEGORY; ++i) {
		if (a[i] < b[i]) {
			++acc_a;
		} else if (a[i] > b[i]) {
			++acc_b;
		}
	}

	return [ acc_a, acc_b ];
};

let a = [ 1, 2, 101 ];
let b = [ 3, 2, 100 ];

console.log(compareTriplets_f(a, b)); //result = [1,1]
