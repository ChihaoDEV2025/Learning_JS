//Container that contain li - p
let container = document.querySelector("#container");

//Get form tag by ID
let submit = document.querySelector("#submit");

//Form with ID : submit
submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let newValue = document.querySelector("#input");

  let li = document.createElement("li");
  li.textContent = `${newValue.value}`; //Attention here

  container.appendChild(li);

  //to reset form
  container.reset();
});

//Get all of li tag in container by querySelectorAll
let listOfLi = document.querySelectorAll("li");

//The new loop
for (let li of listOfLi) {
  li.addEventListener("click", function () {
    li.remove(); //<-Attention here
  });
}

//-------------------------------------2 : Using e.target to test
container.addEventListener("click", function (e) {
  let li = e.target;

  if (li.tagName === "LI") {
    //Attention : tagName not tagname
    //LI is all capitalization
    li.remove();
  }
});
