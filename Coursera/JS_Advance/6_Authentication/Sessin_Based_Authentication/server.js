//Server.js => to interact with network via HTTP request (immutable)
const app = require("./app");

//Define port
const PORT = process.env.PORT || 3000;

//start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//SIGINT

process.on("SIGINT", () => {
  server.end(() => {
    console.log("Server is close");
  });
});
