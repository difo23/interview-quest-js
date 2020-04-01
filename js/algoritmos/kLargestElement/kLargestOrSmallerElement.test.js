const kSmallest = require('./kLargesOrSmallestElement');



test('K Largest and Smallest Element', () => {
	let array = [ 1, 23, 12, 9, 30, 2, 50 ];
	let k = 3;

	expect(kSmallest.kLargest(array, k)).toStrictEqual([ 50, 30, 23 ]);
	expect(kSmallest.kSmallest(array, k)).toStrictEqual([ 1, 2, 9 ]);
});
