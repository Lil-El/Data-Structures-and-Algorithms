/**
 * 镜像反转二叉树
 *         4
 *    2        7
 * 1     3   6    9
 *
 * 变为
 *         4
 *    7         2
 * 9     6   3     1
 */
let Tree = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
    },
    right: {
      val: 3,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
    },
    right: {
      val: 9,
    },
  },
};
module.exports = { Tree };

function mirrorTree(Tree) {
  if (!Tree || !Tree.val) return void 0;
  let temp = { ...Tree.left };
  Tree.left = Tree.right && mirrorTree(Tree.right);
  Tree.right = temp && mirrorTree(temp);
  return Tree;
}
// console.log(mirrorTree(Tree));
