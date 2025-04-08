"use strict"; //explain here

const mongoose = require("mongoose");

const connectString = "mongodb://localhost:27017/shopDEV";
mongoose
  .connect(connectString)
  .then(() => {
    console.log("connected Mongodb Success");
  })
  .catch((err) => {
    console.log("Error Connection");
  });

//dev

if (1 == 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose; //It will create a new connection => collision
