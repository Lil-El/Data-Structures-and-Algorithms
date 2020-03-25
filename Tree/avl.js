/**
 * AVL:自平衡树
 * 添加或移除节点的时候，任意节点的字数高度最多相差一，AVL树尽可能转换为完全数
 * avl可以继承bst，override insert，insertNode，removeNode方法即可
 * 在 AVL 树中插入或移除节点和 BST 完全相同。然而，AVL 树的不同之处在于我们需要检验它的平衡因子
 */
function getHeightNode(node) {
  if (node === null) {
    return -1;
  }
  return (
    Math.max(this.getHeightNode(node.left), this.getHeightNode(node.right)) + 1
  );
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class AVLTree extends BSTTree {
  constructor() {
    this.root = null;
  }
  getBalanceFactor(node) {
    const heightDifference =
      this.getHeightNode(node.left) - this.getHeightNode(node.right);
    switch (heightDifference) {
      case -2:
        return 1;
      case -1:
        return 2;
      case 1:
        return 4;
      case 2:
        return 5;
      default:
        return 3;
    }
  }
  rotateLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }
  //右侧子节点的高度大于左侧子节点的高度，并且右侧子节点也是平衡或右侧较重的;
  rotateRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }
  //左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
  rotateLR(node) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }
  rotateRL(node) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }
  checkBalance(node) {
    if (node == null) return node;
    if (this.getHeightNode(node.left) - this.getHeightNode(node.right) > 1) {
      if (
        this.getHeightNode(node.left.left) >=
        this.getHeightNode(node.left.right)
      ) {
        node = this.rotateLL(node);
      } else {
        node = this.rotateLR(node);
      }
    }
    if (this.getHeightNode(node.right) - this.getHeightNode(node.left) > 1) {
      if (
        this.getHeightNode(node.right.right) >=
        this.getHeightNode(node.right.left)
      ) {
        node = this.rotateRR(node);
      } else {
        node = this.rotateRL(node);
      }
    }
    return node;
  }
  insert(key) {
    this.root = this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    if (node == null) {
      return new Node(key);
    } else if (node.key > key) {
      node.left = this.insertNode(node.left, key);
    } else if (node.key < key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    return this.checkBalance(node);
  }
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    //bst的方法
    let node = super.removeNode(node, key);
    return this.checkBalance(node);
    // //先调用bst方法删除节点，在调用下面的方法去检测是否平衡
    // if (node == null) return node;
    // const balanceFactory = this.getBalanceFactor(node);
    // if (balanceFactory == 1) {
    //   //父节点不平衡的话平衡因子为2，下一个子节点的平衡因子为0或1
    //   /**
    //    *              a
    //    *             / \
    //    *            b   c
    //    *           / \
    //    *          d   e
    //    * 删除c，a平衡因子为2，b有可能只有一个，也有可能是两个
    //    */
    //   const balanceFactoryLeft = this.getBalanceFactor(node.left);
    //   //如果是只有d或de都有
    //   if (balanceFactoryLeft == 3 || balanceFactoryLeft == 4) {
    //     node = this.rotateLL(node);
    //   }
    //   //如果是只有e
    //   if (balanceFactoryLeft == 2) {
    //     node = this.rotateLR(node);
    //   }
    // }
    // if (balanceFactory == 5) {
    //   const balanceFactoryRight = this.getBalanceFactor(node.right);
    //   if (balanceFactoryRight == 2 || balanceFactoryRight == 3) {
    //     node = this.rotateRR(node);
    //   }
    //   if (balanceFactoryRight == 4) {
    //     node = this.rotateRL(node);
    //   }
    // }
    // return node;
  }
}
//  UNBALANCED_RIGHT: 1,
//  SLIGHTLY_UNBALANCED_RIGHT: 2,
//  BALANCED: 3,
//  SLIGHTLY_UNBALANCED_LEFT: 4,
//  UNBALANCED_LEFT: 5
