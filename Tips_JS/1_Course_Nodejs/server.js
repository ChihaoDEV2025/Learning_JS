const app = require("./Src/app");

//Declare your Port
const PORT = process.env.PORT || 3056;

//start on port
const server = app.listen(PORT, () => {
  console.log("Web Services eCommerce start with port " + PORT);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Server Express");
  });
});
