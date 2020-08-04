// 1 3 5 7
// 2 4 6 8
// 合并两个有序链表
let node1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: {
        val: 7,
        next: null,
      },
    },
  },
};
let node2 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 8,
        next: null,
      },
    },
  },
};
function merge(n1, n2) {
  let node = null;
  if (!n1) return null;
  if (!n2) return null;
  if (n1.val < n2.val) {
    node = n1;
    node.next = merge(n1.next, n2);
  } else {
    node = n2;
    node.next = merge(n1, n2.next);
  }
  return node;
}
