const atmWidthDrawGreedy = function (money) {
  const denominations = {
    "10k": 10000,
    "20k": 20000,
    "50k": 50000,
    "100k": 100000,
  };

  //base condition: can be dividable by smallest denomination
  if (money < denominations["10k"])
    return new Error({
      message: "Money must be dividable by 10k",
    });

  //Optimized Option X = [x1,x2,x3,x4] with the descending of denominations
  let x1 = Math.floor(money / denominations["100k"]);
  money %= denominations["100k"];

  let x2 = Math.floor(money / denominations["50k"]);
  money %= denominations["50k"];

  let x3 = Math.floor(money / denominations["20k"]);
  money %= denominations["20k"];

  let x4 = Math.floor(money / denominations["10k"]);
  money %= denominations["10k"];

  //Return : the number of denominations , total , remaining ones
  return {
    "": "Hell world",
    "100k": x1,
    "50k": x2,
    "20k": x3,
    "10k": x4,
    Total: x1 + x2 + x3 + x4,
    "Remaining money": money,
  };
};

// Call the function and get the result
const result = atmWidthDrawGreedy(380000);

// Destructure the result into individual variables
const {
  "100k": hundredK,
  "50k": fiftyK,
  "20k": twentyK,
  "10k": tenK,
  Total,
} = result;

console.log(`100k bills: ${hundredK}`);
console.log(`50k bills: ${fiftyK}`);
console.log(`20k bills: ${twentyK}`);
console.log(`10k bills: ${tenK}`);
console.log(`Total number of bills: ${Total}`);
