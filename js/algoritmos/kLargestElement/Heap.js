const Node = require('./NodeHeap');

// class NodeHeap {
// 	constructor(val, priority) {
// 		this.value = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

//Map(key = index, value)

class Heap {
	constructor(arr) {
		//data ejemplo [1,23,12,9,30,2,50]
		this.data = arr;
		this.len = arr.length;
		this._heapTransform();
	}

	_left(i) {
		return 2 * i + 1;
	}

	_rigth(i) {
		return 2 * i + 2;
	}

	_root(i) {
		return Math.floor((i - 1) / 2);
	}

	_swap(min, max) {
		[ this.data[min], this.data[max] ] = [ this.data[max], this.data[min] ];
	}

	_heapMax() {
		let i = Math.floor(this.len / 2 - 1);

		while (i >= 0) {
			this._heapify(i, this.len);
			--i;
		}
	}

	_heapify(i, len) {
		let left, rigth, rtLagest;
		while (i < len) {
			left = this._left(i);
			rigth = this._rigth(i);
			rtLagest = i;

			if (left < len && this.data[left] > this.data[rtLagest]) {
				rtLagest = left;
			}

			if (rigth < len && this.data[rigth] > this.data[rtLagest]) {
				rtLagest = rigth;
			}

			if (i === rtLagest) return;

			this._swap(i, rtLagest);
			i = rtLagest;
		}
	}

	_heapTransform() {
		this._heapMax();
		let lastElement = this.len - 1;

		while (lastElement > 0) {
			this._swap(0, lastElement);
			this._heapify(0, lastElement);
			--lastElement;
		}
	}
}

let sol = new Heap([ 3, 0, 2, 5, -1, 4, 1 ]);

console.log(sol.data);
