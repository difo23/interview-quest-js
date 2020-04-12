class LinkNode {
	constructor(value, next, pos) {
		this.value = value;
		this.next = next;
		this.position = pos;
	}
}

class LinkList {
	constructor() {
		this.head = new LinkNode('HEAD', null, 0);
		this.tail = this.head;
		this._length = 0;
	}

	_incrementPosFrom(pos) {
		let node = this.head.next;
		if (!node) return;

		while (pos <= this._length) {
			if (pos === node.position) {
				node.position++;
				pos++;
			}
			if (!node.next) return;
			node = node.next;
		}
	}

	_decrementPosFrom(pos) {
		let node = this.head.next;
		if (!node) return;

		while (pos <= this._length) {
			if (pos === node.position) {
				node.position--;
				pos++;
			}
			if (!node.next) return;
			node = node.next;
		}
	}

	_search(index) {
		if (index > this._length) return false;
		if (!this.head.next) return false;

		let node = this.head.next;

		while (index - 1 != node.position) {
			node = node.next;
			if (!node) return false;
		}
		return node;
	}

	append(value) {
		/**
         * Append new node in the end of list
         */
		this._length++;
		let newNode = new LinkNode(value, null, this._length);
		this.tail.next = newNode;
		this.tail = newNode;
	}

	prepend(value) {
		this._incrementPosFrom(1);
		let newNode = new LinkNode(value, this.head.next, 1);
		this.head.next = newNode;
		this._length++;
	}

	insert(index, value) {
		let node = this._search(index);
		if (!node) return false;

		this._incrementPosFrom(index);
		let newNode = new LinkNode(value, node.next, index);
		node.next = newNode;
		this._length++;
		return true;
	}

	remove(index) {
		let node = this._search(index);
		if (!node) return false;

		this._decrementPosFrom(index);
		let prev = node;
		let del = node.next;
		let post = del.next;
		prev.next = post;

		this._length--;
		return true;
	}

	showList() {
		if (!this.head.next) return false;
		let node = this.head.next;
		let listMap = new Map();

		while (node) {
			listMap.set(node.position, node.value);
			node = node.next;
		}
		return listMap;
	}
}

let list = new LinkList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(6);
list.prepend(8);
console.log(list.insert(2, 100));
//list.remove(2);
console.log(list.showList());
