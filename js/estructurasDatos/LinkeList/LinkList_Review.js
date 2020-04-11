class LinkNode {
	constructor(value, next, pos) {
		this.value = value;
		this.next = next;
		this.position = pos;
	}
}

class LinkList {
	constructor() {
		this.head = new LinkNode('HEAD', null);
	}

	addNode(value) {
		if (!this.head.getNext()) {
		}
	}
}
