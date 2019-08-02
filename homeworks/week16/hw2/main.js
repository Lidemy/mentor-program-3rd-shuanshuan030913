function Stack() {
  const arrS = [];
  return {
    push: (e) => {
      arrS.splice(arrS.length, 0, e);
    },
    pop: () => arrS.splice((arrS.length - 1), 1).toString(),
  };
}

function Queue() {
  const arrQ = [];
  return {
    push: (e) => {
      arrQ.splice(arrQ.length, 0, e);
    },
    pop: () => arrQ.splice(0, 1).toString(),
  };
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
