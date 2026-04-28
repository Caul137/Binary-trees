class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return;
        }
        current = current.right;
      } else{
        return; 
      }
    }
  }

  traversal(node = this.root) {
    if (node === null) return;
    this.traversal(node.left);
    console.log(node.value);
    this.traversal(node.right);
  }
}

let tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.traversal()


tree = null;
