let arr = [ 1, 3, 2, 6, -1, 4, 1, 8, 2 ];
let k = 5;

// Fuerza Bruta O(n²)

let promSubKFB = (arr, k) => {
	let len = arr.length,
		sum,
		operaciones = 0,
		prom = [];

	for (let i = 0; i < len - k + 1; ++i) {
		sum = 0;
		for (let j = 0; j < k; ++j) {
			sum += arr[i + j];
			operaciones++;
		}
		prom.push(sum / k);
	}
	console.log(' n-k:' + (len - 5) + ' Operaciones:', operaciones);
	return prom;
};

console.log('Fuerza Bruta', promSubKFB(arr, k));

let promSubKSW = (arr, k) => {
	let sum = 0,
		operaciones = 0,
		prom = [];

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (i >= k - 1) {
			operaciones++;
			prom.push(sum / k);
			sum -= arr[i - k + 1];
		}
	}

	console.log('Operaciones:', operaciones);
	return prom;
};

console.log('Sliding Window', promSubKSW(arr, k));
