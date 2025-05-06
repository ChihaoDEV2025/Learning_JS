const axios = require("axios"); // Import Axios

// Asynchronous function to post data to an API
async function postData() {
  try {
    // Await the response from the Axios POST request
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      }
    );

    // Log the response data
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error posting data:", error);
  }
}

// Execute the async function
postData();
