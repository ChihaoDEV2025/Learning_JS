const axios = require("axios");

const data = {
  name: "John Doe",
  age: 30,
};

axios
  .post("http://localhost:3000/users", data)
  .then((response) => {
    console.log("User created:", response.data);
  })
  .catch((error) => {
    console.error("Error creating user:", error.message);
  });
