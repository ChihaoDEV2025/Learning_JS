const nums = [3, 1, 4, 2];

// sort()
const sorted = [...nums].sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4]

// reverse()
const reversed = [...nums].reverse();
console.log(reversed); // [2, 4, 1, 3]
