class Stack {
  constructor() {
    this.arr = [];
  }

  push(e) {
    this.arr.splice(this.arr.length, 0, e);
  }

  pop() {
    return this.arr.splice((this.arr.length - 1), 1)[0];
  }
}

class Queue {
  constructor() {
    this.arr = [];
  }

  push(e) {
    this.arr.splice(this.arr.length, 0, e);
  }

  pop() {
    return this.arr.splice(0, 1)[0];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

const queue = new Queue();
queue.push(1);
queue.push(2);
console.log(queue.pop()); // 1
console.log(queue.pop()); // 2
