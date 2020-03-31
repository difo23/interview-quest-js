const findDuplicateNumber = require('./findDuplicateNumber');

test('Find Duplicate Number', () => {
	let arr = [ 4, 1, 1, 2, 3 ];
	expect(findDuplicateNumber(arr)).toBe(1);
});
