/**
 * 单向链表
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  push(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      if (index == 0) this.head = this.head.next;
      else {
        let previous = this.getElementAt(index - 1);
        let current = previous.next;
        previous.next = current.next;
      }
      this.count--;
    } else {
      return undefined;
    }
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    } else {
      return undefined;
    }
  }
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      let node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let previous = this.getElementAt(index - 1);
        let current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  remove(element) {
    let index = this.indexOf(element);
    this.removeAt(index);
  }
  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  getHead() {
    return this.head;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0 ? true : false;
  }
  toString() {
    if (this.head == null) return " ";
    let str = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.count; i++) {
      str = `${str},${current.element}`;
      current = current.next;
    }
    return str;
  }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.removeAt(0);
list.insert(0, 1);
console.log("index:", list.indexOf(0));
console.log(list.toString());
