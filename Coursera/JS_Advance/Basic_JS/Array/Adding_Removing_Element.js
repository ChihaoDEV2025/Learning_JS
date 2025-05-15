let arr = [1, 2, 3];

// push()
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// pop()
arr.pop();
console.log(arr); // [1, 2, 3]

// shift()
arr.shift();
console.log(arr); // [2, 3]

// unshift()
arr.unshift(0);
console.log(arr); // [0, 2, 3]

// splice()
arr.splice(1, 1, "a"); // remove 1 item at index 1, add 'a'
console.log(arr); // [0, 'a', 3]

// slice()
const sliced = arr.slice(1, 3);
console.log(sliced); // ['a', 3]
