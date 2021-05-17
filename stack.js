class Stack {
  constructor() {
    this.list = [];
  }
  get length() {
    return this.list.length;
  }
  pop() {
    if (this.length) {
      return this.list.pop();
    }
    return 'Underflow';
  }
  push(item) {
    this.list.push(item);
  }
  peek() {
    if (this.length) {
      return this.list[this.length - 1];
    }
    return null;
  }
  isEmpty() {
    return this.length == 0;
  }
}

const test = new Stack();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
console.log(test.length);
console.log(test.pop());
console.log(test.peek());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.list);
