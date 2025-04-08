const button = document.querySelector("#changeColor");
const nameColor = document.querySelector("#color");
const body = document.querySelector("body");

function changeColor() {
  //Random value
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  //add style to body
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  //display name color
  nameColor.innerHTML = `rgb(${red},${green},${blue})`;
}

button.addEventListener("click", changeColor);
