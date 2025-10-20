// implement Stack in js => last in first out
export class Stack {
  constructor() {
    this.items = [];
  }

  // add elements to the top
  push(element) {
    this.items.push(element);
  }

  // pop from top
  pop() {
    // check if stack not null
    if (this.isEmpty()) {
      return null;
    }

    return this.items.pop(); // remove and return  the last element
  }

  // view the top element
  peek() {
    if (this.isEmpty()) return null;

    return this.items[this.items.length - 1];
  }

  // get stack size
  size() {
    return this.items.length;
  }

  // print the stack
  print() {
    return this.items.join(" | ");
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// testing our stack
// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack.print());
// console.log(stack.peek());

// const el1 = stack.pop();
// console.log(el1);
// console.log(stack.print());

// console.log(stack.isEmpty());
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.isEmpty());

// first in -> first out
export class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the back
  enqueue(element) {
    this.items.push(element);
  }

  // remove element from front
  dequeue() {
    if (this.isEmpty()) return null;

    return this.items.shift(); // remove the first element
  }

  // view the element in the front
  peek() {
    if (this.isEmpty()) return null;

    return this.items[0];
  }

  // check if it's empty
  isEmpty() {
    return this.items.length === 0;
  }

  // git size
  size() {
    return this.items.length;
  }

  // print string representation
  print() {
    console.log(this.items.join(" <- "));
  }
}

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// queue.print();

// console.log(queue.dequeue());
// queue.print();
// console.log(queue.peek());
// console.log(queue.size());
