const EventEmitter = require("events");

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Listener (subscriber) for the 'data' event
emitter.on("data", (message) => {
  console.log("Data received:", message);
});

// Push some data
emitter.emit("data", "Hello from the event emitter!");

/*
    // Pull data from a remote server using fetch
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log('Data pulled from the API:', data);
}

fetchData();

*/
