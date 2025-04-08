//String in Javascript

//Length()
console.error("1.Length method:");
let h = `Chihao`; //-> thoai mai xuong dong ,not \n

console.log(h.length);

//Cat chuoi -> subString
console.error("2. Substring()-slice() method:");

//slice(3,4) != slice(4,3) - substring(3,4) = substring(4,3)
let s1 = `0123456`; //index 0->n

let s2 = s1.slice(1, 4); //123 0:0 ,1:1, 2:2: 1-> 4-1 (n-1)

console.log(s2);

//trim()-trimStat() - trimEnd() --> remove space at first and last
console.error("3. trim() method:");
s2 = " chi ";

console.log(s2.trim());

//Combine two string -> + or concat()
console.error("4.concat() and + method:");
let s3 = s2.trim() + s1;
console.log("+ operator: ", s3);

s3 = s2.concat(s1);
console.log("the usage of concat method: ", s3);

//toUpperCase() - toLowerCase()
console.error("5.toUpperCase() and toLowerCase() method:");
let s4 = "hello world";
console.log("s4.toUpperCase: ", s4.toUpperCase());
console.log("s4.toLowerCase: ", s4.toLowerCase());

//CharAt(); -> to split into the single character (individuals)
console.error("6. CharAt() method:");
for (let i = 0; i < s4.length; i++) {
  console.log("s4.charAt(", i, "): ", s4.charAt(i));
}

console.error("7. Replace() method:");

console.log(
  "s4.Replace(oldValue,NewValue)",
  s4,
  "->",
  s4.replace("he", "He()")
);
console.log("s4 sau khi replace: ", s4);
let s5 = "1112233  ";
console.log(
  "Replace all but not using method: s4.replace(/oldvalue/g,newvalue)"
);
console.log(s5, "->", s5.trim().replace(/1/g, "chihao"));

console.error("8. Repeat(num) method:");
console.log("s5.repeat(n): ", s5.repeat(3));

console.error("9. IndexOf()+ lastIndexOf() method:");
console.log(
  "s4.indexOf(searchValue , fromIndex (limit))-see at first-> return 0-index or -1"
);
console.log(
  "s4.lastIndexOf(searchValue , fromIndex (toi index?)) - see at last -> return 0-index or -1"
);
console.error("If ");
let s25 = `abcdef abcdef`;
let s26 = s25.indexOf("c");
console.log(
  "(s25.indexOf(c))->The first appearance of 'c' character of",
  s25,
  "is",
  s26
);

s26 = s25.lastIndexOf("c");
console.log(
  "(s25.LastIndexOf(c))->The last appearance of 'c' character of",
  s25,
  "is",
  s26
);
console.error("9.1 includes() method:");
s26 = s25.includes("c");
console.log(
  "(s25.Includes(c))->return true or false (as contains in java)",
  s25,
  "is",
  s26
);

console.error("10. startWith() and endWith() method:-> return true false");
console.log("startWith(searchValue, startIndex)");
let s30 = `abcdef abcdef`;
let s31 = s30.startsWith("ab", 3);
console.log("s30.startwith(ab, 3)-> ", s25, "(false)", s31);
console.error(
  "startWith -> phone number(+84) and endWith()-> folder (.mp3,.pgn)"
);
