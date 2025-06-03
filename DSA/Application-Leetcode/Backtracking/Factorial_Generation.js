class Factorial {
  constructor(number) {
    this.x = [];
    this.n = number; //the number of integer numbers
    this.used = [];
    for (let i = 1; i <= this.n; i++) {
      this.used.push(false);
    }
  }

  generate(i) {
    //0 1 2 = j
    //i =

    for (let j = 0; j < this.n; j++) {
      if (!this.used[j]) {
        this.used[j] = true;
        this.x[i] = j + 1;

        //If i start at 0
        //I can't reach N => can't render
        if (i < this.n) {
          this.generate(i + 1);
        } else {
          console.log(this.x);
        }

        this.used[j] = false;
      }
    }
  }
}

const test = new Factorial(3);
test.generate(0);
