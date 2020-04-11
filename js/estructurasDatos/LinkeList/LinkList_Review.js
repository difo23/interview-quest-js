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
    
    _incrementPosFrom(pos){
        let node = this.head.next;
        if(!node) return;

        while (pos <= this._length){
            if(pos === node.position){
              node.position++;
              pos++;    
            }
            if(!nod.next) return;
            node = node.next;
            

        }

    }

	append(value) {
		/**
         * Append new node in the end of list
         */
        this._length++;
        let newNode =  new LinkNode(value, null, this._length)
        this.tail.next = newNode;
        this.tail = newNode;
        
    }
    
    prepend(value){
        

    }
    

}
