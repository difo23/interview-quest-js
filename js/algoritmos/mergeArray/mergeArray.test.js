const fmergeArray = require('./mergeArray');

test('Merge Two Sorted Arrays  [ 0, 3, 4 ] [ 4, 6, 29, 30 ]', () => {
	expect(fmergeArray([ 0, 3, 4 ], [ 4, 6, 29, 30 ])).toStrictEqual([ 0, 3, 4, 4, 6, 29, 30 ]);
});
