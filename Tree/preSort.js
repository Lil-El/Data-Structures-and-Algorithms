/**
 * 遍历 二叉树
 *         4
 *    2        7
 * 1     3   6    9
 *
 * 先序4 2 1 3 7 6 9
 * 中序1 2 3 4 6 7 9
 * 后序1 3 2 6 9 7 4
 */
const { Tree } = require("./mirrorTree");

function preSort(Tree) {
  if (!Tree || !Tree.val) return null;
  console.log(Tree.val);
  preSort(Tree.left);
  preSort(Tree.right);
}
function midSort(Tree) {
  if (!Tree || !Tree.val) return null;
  midSort(Tree.left);
  console.log(Tree.val);
  midSort(Tree.right);
}
postSort(Tree);
function postSort(Tree) {
  if (!Tree || !Tree.val) return null;
  postSort(Tree.left);
  postSort(Tree.right);
  console.log(Tree.val);
}
