class Backtracking {
  constructor(numberOfValue = 1, k = 0) {
    this.arr = [];
    this.n = numberOfValue;
    this.k = k;
  }

  result() {
    console.log(this.arr);
  }
  getBinaryString(i) {
    for (let j = 0; j <= 1; j++) {
      this.arr[i] = j;
      if (i === this.n) this.result();
      else {
        this.getBinaryString(i + 1);
      }
    }
  }

  getCombination(i) {
    for (let j = this.arr[i - 1] + 1; j < this.n - this.k + 1; j++) {
      this.arr[i] = j;
      if (i === this.n) this.result();
      else this.getCombination(i + 1);
    }
  }
}

const B = new Backtracking(6, 3);

// console.log("Get Binary String with length is " + B.n);

// B.getBinaryString(0);

console.log(`The combination of ${B.k} items from ${B.n} set`);
B.getCombination(1);
