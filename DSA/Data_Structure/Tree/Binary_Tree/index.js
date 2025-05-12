class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Phương thức chèn node vào cây
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Phương thức giúp chèn node vào cây (đệ quy)
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Phương thức xóa node với dữ liệu nhất định
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  // Phương thức xóa node (đệ quy)
  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // Nếu node cần xóa
      if (node.left === null && node.right === null) {
        return null; // Node không có con
      }

      if (node.left === null) {
        return node.right; // Node có một con phải
      } else if (node.right === null) {
        return node.left; // Node có một con trái
      }

      // Node có hai con, tìm node nhỏ nhất trong cây con phải
      const minNode = this.findMinNode(node.right);
      node.data = minNode.data; // Thay đổi dữ liệu node hiện tại với minNode
      node.right = this.removeNode(node.right, minNode.data); // Xóa node nhỏ nhất đó
      return node;
    }
  }

  // Tìm node nhỏ nhất trong cây
  findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // Phương thức tìm kiếm node
  search(node, data) {
    if (node === null) return null;
    if (data < node.data) return this.search(node.left, data);
    if (data > node.data) return this.search(node.right, data);
    return node; // Tìm thấy node
  }

  // Duyệt cây theo thứ tự hậu (Post-order)
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // Duyệt cây theo thứ tự trước (Pre-order)
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Duyệt cây theo thứ tự giữa (In-order)
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

// **Kiểm tra ví dụ:**

const bst = new BinarySearchTree();

// Chèn các node vào cây
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);

// Duyệt cây theo thứ tự hậu
console.log("Post-order traversal:");
bst.postorder(bst.root); // Output: 3, 7, 5, 12, 15, 10

// Duyệt cây theo thứ tự trước
console.log("Pre-order traversal:");
bst.preorder(bst.root); // Output: 10, 5, 3, 7, 15, 12

// Duyệt cây theo thứ tự giữa
console.log("In-order traversal:");
bst.inorder(bst.root); // Output: 3, 5, 7, 10, 12, 15

// Xóa node có giá trị 5
console.log("Removing node with data 5:");
bst.remove(5);
bst.postorder(bst.root); // Output: 3, 7, 12, 15, 10

// Tìm kiếm node có giá trị 12
console.log("Searching for node with data 12:");
const result = bst.search(bst.root, 12);
console.log(result ? `Node found: ${result.data}` : "Node not found");

// Tìm kiếm node không tồn tại trong cây
console.log("Searching for node with data 20:");
const result2 = bst.search(bst.root, 20);
console.log(result2 ? `Node found: ${result2.data}` : "Node not found");
