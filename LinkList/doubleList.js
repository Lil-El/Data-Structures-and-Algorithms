/**
 * 单向链表
 * 1->2->3->4
 * 双向链表
 * 1<->2<->3<->4
 * 循环链表
 * 1->2->3->4->1
 * 双向循环链表
 * 1<->2<->3<->4<->1
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

class DoubleNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
class DoubleList extends LinkedList {
  constructor() {
    super();
    this.tail = undefined;
  }
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new DoubleNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          this.tail = node;
        }else {
        node.next = this.head;
        current.prev = node;
        this.head = node;
      }
      } else if (index === this.count) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      let previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
      current.prev = node;
      node.prev = previous;
    }
    this.count++
    return true;
  }else{
    return false
  }
}
