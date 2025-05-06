//Install: npm i axios

// Import the axios library
const axios = require("axios");

// Using axios.get() to fetch data from an API

//fetch().then(res => !res.ok => return res.json) .then(data => return data) .
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     // Logging the received data
//     console.log(response.data);
//   })
//   .catch((error) => {
//     // Handling errors
//     console.error("Error fetching data:", error);
//   });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) return new Error("Have no response");

    return response.json();
  })
  .then((data) => {
    // Convert the array into an object, using the 'id' as the key
    const dataAsObject = data.reduce((acc, post) => {
      acc[post.id] = post; // Use 'id' as the key
      return acc;
    }, {}); //initialize empty object => {}

    console.log(dataAsObject); // Log the data in object format
  })
  .catch((e) => {
    console.log(e);
  });
