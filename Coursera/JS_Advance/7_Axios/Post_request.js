// Import the axios library.
const axios = require("axios");

// Data to be sent in the POST request
const data = {
  name: "John Doe",
  age: 30,
};

// Sending a POST request
axios
  .post("https://api.example.com/users", data)
  .then((response) => {
    // Logging the response
    console.log("User created:", response.data);
  })
  .catch((error) => {
    // Handling errors
    console.error("Error creating user:", error);
  });
