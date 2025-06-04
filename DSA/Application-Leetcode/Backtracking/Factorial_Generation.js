class Factorial {
  constructor(number) {
    this.x = [];
    this.n = number;
    this.used = new Array(this.n).fill(false);
  }

  generate(i) {
    if (i === this.n) {
      console.log(this.x.slice());
      return;
    }

    for (let j = 0; j < this.n; j++) {
      if (!this.used[j]) {
        this.used[j] = true;
        this.x[i] = j + 1;

        this.generate(i + 1);

        this.used[j] = false;
      }
    }
  }
}

const test = new Factorial(3);
test.generate(0);
