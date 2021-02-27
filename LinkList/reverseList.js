                                                                                                                        // 反转链表  1 3 4 5 6 7 -> 7 6 5 4 3 1
// https://blog.csdn.net/weixin_44057301/article/details/107058170
let node = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 5,
        next: {                             
          val: 6,
          next: {
            val: 7,
            next: null,
          },
        },
      },
    },
  },
};

function reverseList(node) {
  let pre = null;
  let cur = node;
  let next = cur.next;
  while (cur) {
    cur.next = pre;
    pre = cur;
    cur = next;
    next = next && next.next;
  }
  return pre;
}
console.log(JSON.stringify(reverseList(node)));
