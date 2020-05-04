function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
	if (arr1.length === 0 && arr2.length === 0) return [];

	if (arr1.length === 0)
		return arr2.sort(function(a, b) {
			return b[1] < a[1];
		});

	if (arr2.length === 0)
		return arr1.sort(function(a, b) {
			return b[1] < a[1];
		});

	let curInv = new Map();
	let i = 0;
	for (let e of arr1) {
		curInv.set(e[1], i);
		i += 1;
	}

	for (let e of arr2) {
		if (!curInv.has(e[1])) {
			arr1.push([ e[0], e[1] ]);
		} else {
			let index = curInv.get(e[1]);
			arr1[index][0] += e[0];
		}
	}

	return arr1.sort(function(a, b) {
		return b[1] < a[1];
	});
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
