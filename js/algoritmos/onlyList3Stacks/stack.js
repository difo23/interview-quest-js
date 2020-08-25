
//  Daily Coding Problem
//  Good morning! Here's your coding interview problem for today.

//  This problem was asked by Microsoft.

//  Implement 3 stacks using a single list:

//  class Stack:
//      def __init__(self):
//          self.list = []

//      def pop(self, stack_number):
//          pass

//      def push(self, item, stack_number):
//          pass


class Stack {
    constructor(n = 3) {
        this.list = [];
        this._n = n;
        this._index = Array(n).fill(0).map((item, i) => i - n);
    }

    pop(stack) {
        if (this._index[stack - 1] < 0) return null;
        let item = this.list[this._index[stack - 1]];
        this.list[this._index[stack - 1]] = null;
        this._index[stack - 1] -= this._n;
        return item;

    }

    push(item, stack) {
        this._index[stack - 1] += this._n;
        this.list[this._index[stack - 1]] = item;
    }

}



let stack = new Stack();

stack.push('a', 1);
stack.push('b', 1);
stack.push('c', 1);
stack.push('e', 2);
stack.push('d', 3);

console.log(stack.pop(3));
console.log(stack.pop(2));
console.log(stack.pop(2));



