let randomValue = Math.random();
console.log(`The random number ranges from 0.000-1.000 ${randomValue}`);

randomValue = Math.random() * 10;
console.log(
  `The random number ranges from 0.000-10.000 (random*10) ${randomValue}`
);

randomValue = parseInt(Math.random() * 10);
console.log(
  `The random number ranges from 0-10 parseInt(random*10) ${randomValue}`
);
