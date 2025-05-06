const fs = require("fs");

fs.readFile("D:/Link.txt", "utf8", (err, data) => {
  let lines = data.trim().split(/\s+/);
  // Tách theo dấu cách hoặc xuống dòng

  let n = parseInt(lines[0]); // Số đầu tiên
  let array = lines.slice(1).map(Number);
  // Chuyển các phần còn lại thành số

  console.log("n =", n);
  console.log("array =", array);
});
