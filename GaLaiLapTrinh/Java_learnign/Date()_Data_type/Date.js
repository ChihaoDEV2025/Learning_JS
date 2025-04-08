//Declare ==> this one is object
let currentDate = new Date();

console.log(`The current date : ${currentDate}`);
console.log(`And its type is ${typeof currentDate}`); //(Because it's 'new' for an object)

//Built-in function
let month = currentDate.getMonth + 1;
console.log("the current month is: " + month);
