## 🎄 What is it?

##### A Binary Tree is a type of data structure used to organize data efficiently, mainly helping with fast searching, data sorting, and hierarchical storage. They can be found in databases (indexing), file systems, search engines, compilers, AI algorithms, frameworks, libraries, and many other systems.

* Each element of the tree is called a node, and each node can have at most two children (left child and right child).

---

## **Types of Binary Trees**

### Simple Binary Trees (Structural)

Focused more on structure than balancing rules.

1. **Full Binary Tree**: Every node has either 0 or 2 children.
2. **Complete Binary Tree**: Filled from left to right.
3. **Perfect Binary Tree**: All levels are completely filled.
4. **Degenerate Tree**: Becomes almost like a linked list (worst case).

---

## **Binary Search and Balanced Trees**

- **BST (Binary Search Tree)**: Left subtree < node and right subtree > node.  
  It is fast when balanced, but becomes slow if it turns into a list.

- **AVL Tree**: More strict; keeps the height balanced (difference <= 1).  
  It is always balanced and performs rotations to adjust itself.

- **Red-Black Tree**: Less strict than AVL; uses colors (red and black) for balancing.  
  It is more commonly used in practice (example: internal libraries).

---

## **Other Binary Trees**

- **Splay Tree**: Moves frequently accessed elements to the top.
- **Treap**: Combination of Binary Tree + Heap.
- **Binary Heap**: (min-heap / max-heap)
- **Expression Tree**: Used in compilers.

---

## **B-Tree**

B-Tree is not a binary tree. A B-Tree is a tree where each node can have multiple children (not only 2), stores multiple keys inside a single node, and is self-balanced. In short, a node can contain multiple values and multiple paths.

It was designed for disks, databases, file systems, and efficient indexing.

It is used in MySQL, PostgreSQL, NTFS, ext4, and others.

Binary Trees are the conceptual foundation for hierarchical organization and efficient searching, but they are not ideal for disk usage. Because of that, B-Trees are used in real database systems instead of common binary trees (BST, AVL, etc).

---

## **B+ Tree**

B+ Tree is a variant of the B-Tree optimized for storing data in blocks. Since internal nodes do not store actual data, more keys can fit inside a single node, making searches faster and the tree smaller.

Most databases use B+ Trees because:

- Data exists only in leaf nodes
- Better for sequential searches and range queries (example: `BETWEEN`)
- It is the dominant structure used for indexes

---

## **Difference Between B-Tree and B+ Tree**

The most well-known version of the B-Tree is the B+ Tree. The main differences between them are:

| Characteristics | B-Tree | B+ Tree |
| ----------- | ----------- | ----------- |
| Data storage | Keys and data are stored in all nodes (internal and leaf nodes). | Data is stored only in leaf nodes. Internal nodes store only routing keys. |
| Leaf pointers | Does not have linked leaves. | Leaf nodes are connected as a linked list. |
| Range queries | Less efficient; requires tree traversal (in-order traversal). | Very efficient; leaves are connected through pointers, allowing sequential scans. |
| Space usage | Can use less space if data is small. | May use more space due to duplicated keys in internal nodes. |