const checkPermutation = require('./checkPermutation');

test('Check Permutation st y ts', () => {
	expect(checkPermutation('vcaa', 'acvv')).toBe(false);
	expect(checkPermutation('vcaa', 'acva')).toBe(true);
});
