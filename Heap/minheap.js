/**
 * 堆：是一种完全二叉树，即从根节点到倒数第二层的节点都是满二叉树
 */
class MinHead {
  constructor() {
    this.heap = [];
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    if (value !== null) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  siftUp(index) {
    let parIdx = this.getParentIndex(index);
    while (this.heap(parIdx) > this.heap[index]) {
      this.swap(parIdx, index);
      index = parIdx;
      parIdx = this.getParentIndex(index);
    }
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tamp;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  findMinmum() {
    return this.heap[0] !== undefined ? this.heap[0] : undefined;
  }
  extract() {
    if (this.isEmpty()) return undefined;
    if (this.size() === 1) return this.heap.shift();
    let rmnode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    return rmnode;
  }
  /**
   * @param {number} index
   */
  siftDown(index) {
    let element = index;
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    if (left < this.size() && this.heap[element] > this.heap[left]) {
      element = left;
    }
    if (right < this.size() && this.heap[element] > this.heap[right]) {
      element = right;
    }
    if (element !== index) {
      this.swap(element, index);
      this.siftDown(element);
    }
  }
}
