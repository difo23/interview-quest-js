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
		this.tail = head;
		this._length = 0;
	}

	append(value) {
		/**
         * Append new node in the end of list
         */
        let newNode =  new LinkNode(value, null)
        this.tail.next = newNode;
        this.tail = newNode;
        
	}
}
