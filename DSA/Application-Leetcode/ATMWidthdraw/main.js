//
function atmWithdrawGreedy(money) {
  //Base condition
  if (money % 10000 === 0) {
    console.log("Amount must be divided by 10");
  }
  //x1 x2 x3 x4
  //100k
  let x1 = Math.floor(money / 100000);
  money %= 100000;
  //50k
  let x2 = Math.floor(money / 50000);
  money %= 50000;
  //20k
  let x3 = Math.floor(money / 20000);
  money %= 20000;
  //10k
  let x4 = Math.floor(money / 10000);
  money %= 10000;

  return {
    "100k": x1,
    "50k": x2,
    "20k": x3,
    "10k": x4,
    Total: x1 + x2 + x3 + x4,
  };
}

// Example usage:
console.log(atmWithdrawGreedy(380000));
