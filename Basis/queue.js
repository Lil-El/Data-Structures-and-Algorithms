class Queue {
  constructor() {
    this.lowestCount = 0;
    this.count = 0;
    this.items = {};
  }
  enqueue(element) {
    this.items[this.count++] = element;
  }
  dequeue() {
    if (this.isEmpty()) return undefined;
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  size() {
    return this.count - this.lowestCount;
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    if (this.isEmpty()) return " ";
    let str = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`;
    }
    return str;
  }
}
let queue = new Queue();
queue.enqueue(12);
queue.enqueue(16);
queue.enqueue(15);
queue.enqueue(11);
console.log(queue.toString());
console.log(queue.size());
console.log(queue.peek());
queue.dequeue();
console.log(queue.toString());
console.log(queue.size());
console.log(queue.peek());
queue.clear();
console.log(queue.size());
