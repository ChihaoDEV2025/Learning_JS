const numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach((num) => console.log(num * 2)); // Logs 2, 4, 6, 8, 10

// map()
const squared = numbers.map((num) => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// filter()
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce()
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
