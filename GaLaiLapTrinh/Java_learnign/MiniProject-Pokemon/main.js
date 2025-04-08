//get list section
let list = document.querySelector(`#container`);

//link img pokemon;
let numerousPokemon = 151;

//URl
let baseURL = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/`;

//Append child
for (let i = 1; i <= numerousPokemon; i++) {
  let information = document.createElement("div");
  information.classList.add(`inf${i}`);
  //append
  let parenDiv = list.appendChild(information);

  let img = document.createElement("img");
  img.src = `${baseURL}${i}.png`;
  img.alt = `this is pokemon`;
  parenDiv.appendChild(img);

  //span -> inline -> nam cung mot hang
  let name = document.createElement(`span`);
  name.innerText = `#${i}`;

  parenDiv.appendChild(name);
}
console.log(list);
