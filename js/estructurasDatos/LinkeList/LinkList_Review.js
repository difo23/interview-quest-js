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
    
    insert(index, value){

        if(index > this._length) return false;
        let node = this.head.next;
        
        while( index-1 != node.posistion){
            node = node.next
        }
        this._incrementPosFrom(index);
        let newNode = new LinkNode(value, node.next, index)
        node.next = newNode;
    }
}

let list = new LinkList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(6);
list.prepend(8);
console.log(list);
