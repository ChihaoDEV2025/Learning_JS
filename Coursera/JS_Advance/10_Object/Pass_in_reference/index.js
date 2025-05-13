class Test {
  constructor() {
    this.bucket = Array(5) // Creating an array of size 5
      .fill(null)
      .map(() => []); // Each element is an empty array
  }
}

const t = new Test(); // Creating an instance of the class

let h = t.bucket[0]; // Accessing the first bucket

//check this
console.log(`The value of bucket[0]: ${t.bucket[0]}`); // Should also print: []
console.log(`The value of h: ${h}`); // Should print an empty array: []

h.push(1); // Using push instead of append
console.log(`The value of h: ${h}`); // Should print: [1]

console.log(`The value of bucket[0]: ${t.bucket[0]}`); // Should also print: [1]

// //Change t.bucket[0]
// let h = t.bucket[0]; // Accessing the first bucket

// //check this
// console.log(`The value of bucket[0]: ${t.bucket[0]}`); // Should also print: []
// console.log(`The value of h: ${h}`); // Should print an empty array: []

// t.bucket[0].push(1); // Using push instead of append
// console.log(`The value of h: ${h}`); // Should print: [1]

// console.log(`The value of bucket[0]: ${t.bucket[0]}`); // Should also print: [1]

element.addEventListener("click", handler, {
  capture: true, // Use capture phase (default: false)
  once: true, // Runs only once
  passive: true, // Improves performance (for scroll/touch events)
});
