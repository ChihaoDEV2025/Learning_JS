class Test {
  show() {
    console.log("Hello World!!");
  }

  static getInstance() {
    return new Test();
  }
}

let testClass = Test.getInstance();

module.exports = testClass;
