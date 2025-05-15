const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// find()
const user = users.find((u) => u.name === "Bob");
console.log(user); // { id: 2, name: 'Bob' }

// findIndex()
const index = users.findIndex((u) => u.name === "Alice");
console.log(index); // 0

// includes()
const fruits = ["apple", "banana"];
console.log(fruits.includes("banana")); // true

// indexOf()
console.log(fruits.indexOf("apple")); // 0
console.log(fruits.indexOf("grape")); // -1
