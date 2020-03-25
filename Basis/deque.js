/**
 * 循环队列
 */

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.items[this.count] = element;
      this.count++;
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = element;
    } else {
      for (let i = this.count - 1; i >= 0; i--) {
        this.items[i + 1] = this.items[i];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
    console.log(this.items);
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    if (this.isEmpty()) return undefined;
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) return undefined;
    let result = this.items[--this.count];
    delete this.items[this.count];
    return result;
  }
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.items = {};
    this.count = this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) return " ";
    let str = this.items[this.lowestCount];
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`;
    }
    console.log(str);
    return str;
  }
}
function palindromeChecker(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    // {1}
    return false;
  }
  const deque = new Deque(); // {2}
  const lowerString = aString
    .toLocaleLowerCase()
    .split(" ")
    .join(""); // {3}s
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    // {4}
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    // {5}
    firstChar = deque.removeFront(); // {6}
    lastChar = deque.removeBack(); // {7}
    if (firstChar !== lastChar) {
      isEqual = false; // {8}
    }
  }
  return isEqual;
}
console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a caror a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step on no pets"));
