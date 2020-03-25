const _items = Symbol["stackItems"];
class Stack {
  constructor() {
    this[_items] = {};
    this._count = 0;
  }
  push(element) {
    this[_items][this._count] = element;
    this._count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this._count--;
    const result = this[_items][this._count];
    delete this[_items][this._count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this[_items][this._count - 1];
  }
  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
  size() {
    return this._count;
  }
  isEmpty() {
    return this._count === 0;
  }
  toString() {
    if (this.isEmpty()) {
      return " ";
    }
    let result = this[_items][0];
    for (let i = 1; i < this._count; i++) {
      result = `${result}${this[_items][i]}`;
    }
    return result;
  }
}
