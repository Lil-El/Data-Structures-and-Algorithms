/*
*         4
*    2        7
* 1     3   6    9
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
function deepTraverse(root){
    if(!root) return void 0;
    console.log(root.val)
    deepTraverse(root.left)
    deepTraverse(root.right)
}
widthTraverse(Tree)
function widthTraverse(root){
  let arr = [root]
  while(arr.length > 0){
      let cur = arr.shift()
      console.log(cur.val)
      cur.left && arr.push(cur.left)
      cur.left && arr.push(cur.right)
  }
}