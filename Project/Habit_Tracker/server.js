//app
const app = require("./src/app");

//Port
const PORT = process.env.PORT || 3001;

//start
const server = app.listen(PORT, () => {
  console.log("Server is running at " + PORT);
});
//signal interrupt
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server is close!!");
  });
});
