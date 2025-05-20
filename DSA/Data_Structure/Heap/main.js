class MyHeap {
  constructor() {
    this.arr = [];
  }

  //Helper Function
  isEmpty() {
    return this.arr.length === 0;
  }

  Swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }

  heapifyDown(currentIndex) {
    // Heapify down
    const size = this.arr.length;

    while (true) {
      let leftChild = 2 * currentIndex + 1; // or could be 2 * current index
      let rightChild = 2 * currentIndex + 2; // or could be 2 * current index +1
      let smallest = currentIndex;

      if (leftChild < size && this.arr[leftChild] < this.arr[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < size && this.arr[rightChild] < this.arr[smallest]) {
        smallest = rightChild;
      }

      if (smallest !== currentIndex) {
        this.Swap(currentIndex, smallest);
        currentIndex = smallest;
      } else {
        break;
      }
    }
  }
  //Main Function

  peek() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty!");
    }
    return this.arr[0];
  }

  add(value) {
    this.arr.push(value);
    let currentIndex = this.arr.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Heapify up
    while (currentIndex > 0 && this.arr[currentIndex] < this.arr[parentIndex]) {
      this.Swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  poll() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty!");
    }

    if (this.arr.length === 1) {
      return this.arr.pop();
    }

    const minValue = this.arr[0];
    this.arr[0] = this.arr.pop(); // Replace root with last element
    this.heapifyDown(0); // Re-heapify

    return minValue;
  }

  remove(v) {
    //Find the v position
    let curIndex = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === v) {
        curIndex = i;
        break;
      }
    }

    if (curIndex === -1) {
      return new Error("Element is not exist!!");
    }

    //assign that v to the last element
    this.arr[curIndex] = this.arr[this.arr.length - 1];
    this.arr.pop();
    this.heapifyDown(curIndex);
  }
}

let myheap = new MyHeap();

myheap.add(10);
myheap.add(5);
myheap.add(1);
myheap.add(6);

//Take and heapify down
// while (!myheap.isEmpty()) {
//   console.log(myheap.poll());
// }

//Return the whole heap => is different
// console.log(myheap.arr);

//Test Remove
console.log("peek: " + myheap.peek());
myheap.remove(10);

while (!myheap.isEmpty()) {
  console.log(myheap.poll());
}
