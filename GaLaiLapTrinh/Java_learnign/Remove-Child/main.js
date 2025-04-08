//Select parent
const list = document.querySelector(`#list`);
console.log(list);
//Select removal child 

const listElm = document.querySelector(`#item2`);

//Remove
list.removeChild(listElm);

console.log(list.data);
