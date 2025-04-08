//Div
const child = document.querySelector("#child");
child.addEventListener(
  "click",
  function (e) {
    alert("child clicked!");
  },
  { capture: true }
);

child.parentElement.addEventListener(
  "click",
  function (e) {
    alert("parent clicked!");
  },
  true
);

child.parentElement.parentElement.addEventListener(
  "click",
  function (e) {
    alert("grandparent clicked!");
  },
  false
);
let form = document.querySelector("#container");
let parent = document.querySelector("#myList");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let message = document.querySelector(".message").value;
  let username = document.querySelector(".username").value;

  let li = document.createElement("li");
  li.textContent = username + ":" + message;

  parent.appendChild(li);
  form.reset();
});

//Case 1:

parent.addEventListener("click", function (e) {
  const li = e.target;
  if (li.tagName === "LI") {
    //Capitalization
    li.remove();
  }
});

//Case 2: Cannot remove the further element

let arrLi = document.querySelectorAll("ul  li");
for (let li of arrLi) {
  li.addEventListener("click", function () {
    li.remove();
  });
}
