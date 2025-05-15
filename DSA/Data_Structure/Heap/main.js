class MyHeap {
  constructor() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Heap is empty!");
    }
    return this.arr[0];
  }

  Swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
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

    const minValue = this.arr[0];
    const lastValue = this.arr.pop();

    if (!this.isEmpty()) {
      this.arr[0] = lastValue;

      // Heapify down
      let currentIndex = 0;
      const size = this.arr.length;

      while (true) {
        let leftChild = 2 * currentIndex + 1;
        let rightChild = 2 * currentIndex + 2;
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

    return minValue;
  }
}

let myheap = new MyHeap();

myheap.add(10);
myheap.add(5);
myheap.add(1);
myheap.add(6);

console.log(myheap.arr);
a;
