const fs = require("fs");

const data = fs.readFileSync("link.txt", "utf8");
console.log(data);
