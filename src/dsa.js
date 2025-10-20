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
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.print());
console.log(stack.peek());

const el1 = stack.pop();
console.log(el1);
console.log(stack.print());

console.log(stack.isEmpty());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());
