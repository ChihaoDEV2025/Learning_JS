// Display results on HTML elements without console
let container = document.querySelector("#container");

//Fetch - function fetchAPI() => use async function await
fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  .then((respond) => {
    if (!respond.ok) {
      throw new Error("Network response was not ok");
    }
    return respond.json();
  })
  .then((data) => {
    let newContainer1 = document.createElement("p");
    newContainer1.classList.add("new", "container");
    newContainer1.innerHTML = data.id;

    container.appendChild(newContainer1);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation: " + error);
  });

getJSONfile();
//
async function getJSONfile() {
  try {
    const response = await fetch("test.json");
    if (!response.ok) {
      throw new Error("Network response was not ok!!");
    }

    const data = await response.json();
    let newContainer = document.createElement("p");
    newContainer.classList.add("new", "container"); 

    newContainer.innerHTML = data.Student.ID;

    container.appendChild(newContainer);
  } catch (error) {
    console.error("There was a problem with the fetch operation : " + error);
  }
}
