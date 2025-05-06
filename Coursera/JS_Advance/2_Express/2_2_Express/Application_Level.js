const express = require("express"); //Install npm -i express --save-dev
const app = express();

app.get("/user/about/:id", (req, res) => {
  res.send("User About Page");
});
app.post("/user/about/:id", (req, res) => {
  res.send("User About Page - POST");
});

//=> just using HTTP request via app => but if need to break down into smaller => using router_level
