const firstLink = document.querySelector("a");

console.log(firstLink);

if (firstLink) {
  const linkHref = firstLink.getAttribute("href");
  console.log(linkHref);
} else {
  console.log(`Meo co`);
}

// Bài tập
const title = document.querySelector(`h1`);
if (title) {
  title.setAttribute(`style`, "color: red");
} else {
  alert(`Not found!`);
}

//Remove and hasAttribute
if (title.hasAttribute(`style`)) {
  console.log(`tile has style ${title.hasAttribute(`style`)}`);

  title.removeAttribute(`style`);

  console.log(`completely removed!!`);

  console.log(`tile has style ${title.hasAttribute(`style`)}`);
} else {
  console.log(`Not found!`);
}
