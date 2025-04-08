function factorial(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

//Fibonacci

function Fi(n) {
    //n-1 n-2 : 
  if (n < 2) return 1;

  return Fi(n - 1) + Fi(n - 2);
}

let num = Number(prompt("Hay nhap mot vi tri: "));
console.log("Day cac so trong day Fibonacci tu 1->", num, "la: \n");
for (let i = 1; i <= num; i++) {
  console.log(Fi(i));
}
