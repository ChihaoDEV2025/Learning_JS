let elm = document.querySelector(`#demo`);

console.log(`TextContent ${elm.textContent}`);
console.log(`InnerHTML ${elm.innerHTML}`);
console.log(`InnerText ${elm.innerText}`);

let elm1 = document.getElementById("demo");
elm1.style.color = "red";
