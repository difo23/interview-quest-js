const Node = require('./NodeHeap');

// class NodeHeap {
// 	constructor(val, priority) {
// 		this.value = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

//Map(key = index, value)

class heap {
	constructor(arr) {
		//data ejemplo [1,23,12,9,30,2,50]
		this.data = arr;
		this.len = arr.length;
		this.heap = new Map();
		this._heapTransform();
	}

	_left(i) {
		return 2 * i + 1;
	}

	_right(i) {
		return 2 * i + 2;
	}


	_root(i) {
		return Math.floor((i - 1) / 2);
	}

	_swap(i, root){
		this.heap.set(i, this.data[root]);
		this.heap.set(root, this.data[i]);
	}

	_heap(i){
		let left = this._left(i);
		let rigth = this._rigth(i);
		let root = i;

		if(left < this.len && this.data[left]) > this.data[root] ){
			root = left;
		}

		if(rigth < this.len && this.data[rigth]) > this.data[root] ){
			root = rigth;
		}
	
		if(root != i){
			this._swap(i, root);
			this._heap(root)
		}

	}

	
	_heapTransform() {
		let len = this.data.length;
		//Recorro el arreglo desde la mitad del mismo
		for (let i = Math.floor(len / 2); i >= 0; i--) {
			this._heap(i);
		}
		// Organizo todo el arreglo
		for (let i = this.len -1; i >=0 ; i--){
			this._swap(0, i);
			len--;
			this._heap(0);
		} 
	}
}
