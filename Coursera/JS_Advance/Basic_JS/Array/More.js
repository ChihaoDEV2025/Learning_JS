// concat()
const a = [1, 2];
const b = [3, 4];
const merged = a.concat(b);
console.log(merged); // [1, 2, 3, 4]

// join()
const words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

// flat()
const nested = [1, [2, [3]]];
console.log(nested.flat(2)); // [1, 2, 3]

// every()
const allPositive = [1, 2, 3].every((x) => x > 0);
console.log(allPositive); // true

// some()
const hasNegative = [1, -2, 3].some((x) => x < 0);
console.log(hasNegative); // true

// at()
const letters = ["a", "b", "c"];
console.log(letters.at(1)); // 'b'
console.log(letters.at(-1)); // 'c'
