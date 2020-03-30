const firstRecurringNumber = require('./firstRecurringNumber');

test('First Recurring Number [ 4, 1, 1, 2, 3 ]', () => {
	expect(firstRecurringNumber([ 4, 1, 1, 2, 3 ])).toBe(1);
});
