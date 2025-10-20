// implement Stack in js => last in first out
export class Stack<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  // add elements to the top
  push(element: T): void {
    this.items.push(element);
  }

  // pop from top
  pop(): T | null {
    // check if stack not null
    if (this.isEmpty()) {
      return null;
    }

    return this.items.pop()!; // remove and return  the last element
  }

  // view the top element
  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.items[this.items.length - 1];
  }

  // get stack size
  size(): number {
    return this.items.length;
  }

  // print the stack
  print(): string {
    return this.items.join(" | ");
  }

  isEmpty(): boolean {
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
export class Queue<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  // add element to the back
  enqueue(element: T): void {
    this.items.push(element);
  }

  // remove element from front
  dequeue(): T | null {
    if (this.isEmpty()) return null;

    return this.items.shift()!; // remove the first element
  }

  // view the element in the front
  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.items[0];
  }

  // check if it's empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // git size
  size(): number {
    return this.items.length;
  }

  // print string representation
  print(): void {
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

// linked list -> chain of pointers
// head -> [value | next] -> [value | next] -> [value | null]or tail

//a node
export class Node<T> {
  // class is generic, when instantiating -> pass a type eg: Node<number> -> then throughout that object -> T should remain of type number and assigning other stuff -> get you some error
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    // pointer to the next node
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null; // starting node
  private size: number; // size of the list

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add element at the end of the list
  append(value: T): void {
    // create a new node with the value
    const newNode = new Node(value);

    // if no head => set it to head
    if (!this.head) this.head = newNode;
    else {
      // start from head -> loop til node.next = null -> the assign newNode there
      let current = this.head;

      while (current.next) {
        // last node.next = null -> so, loop stops
        current = current.next;
      }

      // at this point current = node.next = null
      current.next = newNode;
    }

    // increment list size
    this.size++;
  }

  // add element to the front
  prepend(value: T): void {
    // new node
    const newNode = new Node(value);

    // set newNode.next = head -> even if this.head = null -> newNode becomes the head anyways
    newNode.next = this.head;
    // new node becomes the head
    this.head = newNode;

    this.size++;
  }

  // find node by value , remove the first instance
  remove(value: T): void {
    // if there is no head
    if (!this.head) return;

    // if it's the head
    if (this.head.value === value) {
      this.head = this.head.next; // set head to the next node
      this.size--;
      return;
    }

    // loop and find the node
    let current = this.head;

    // move to one before the target -> node-before -> target
    while (current.next && current.next.value !== value) {
      current = current.next; // before.next.value == target.value -> loop stops
    }

    // before -> target -> after
    // then: attach before to after
    // point: before.next = before.next.next
    if (current.next) {
      // check for null -> cause it might be the last element -> which next = null
      current.next = current.next.next;
      this.size--;
    }
  }

  /**
   * find node with given value
   * */
  find(value: T): Node<T> | null {
    let current = this.head;

    while (current) {
      // return value if found
      if (current.value === value) return current;

      // go to the next node
      current = current.next;
    }

    // not found
    return null;
  }

  /**
   * print list to console as string
   * */
  print(): void {
    let current = this.head;
    let output = "";

    while (current) {
      output += `${current.value} ${current.next ? "-> " : ""}`;

      current = current.next;
    }

    console.log(output || "empty list");
  }

  /**
   * return list size
   * */
  getSize(): number {
    return this.size;
  }

  /**
   * check if the list is empty
   * */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * convert the list to array
   * */

  toArray(): T[] {
    const results: T[] = [];

    let current = this.head;

    while (current) {
      const value = current.value;
      results.push(value);

      // move to the next node
      current = current.next;
    }

    return results;
  }
}

// test linked list

// const list = new LinkedList<number>();

// list.append(1);
// list.append(2);
// list.append(3);

// list.prepend(30);
// list.print();

// console.log("find 2 ", list.find(2));

// list.remove(30);
// console.log("size: ", list.getSize());

// console.log("array:", list.toArray());
