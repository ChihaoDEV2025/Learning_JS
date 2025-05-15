//Get form in HTML
let input = document.querySelector(`#input`);

//Add event listener
input.addEventListener("submit", function (e) {
  e.preventDefault(); //=> to prevent the following mistake of 'form'
  //After submit , whether password is correct or not ,'form' is also
  //reach to the certain page
  input.reset();
});
