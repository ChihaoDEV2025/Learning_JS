//get mongoose dependency => install
let mongoose = require("mongoose");
//URL or connectString

//mongodb://{host}:port/name

const connectString = "mongodb://localhost:20347/shopDev";
//using promise to using connect() of mongoose
mongoose
  .connect(connectString)
  .then(() => {
    console.log("Connect MongoDB Successfully!!!!!!");
  })
  .catch((e) => {
    console.log("Error Connect: " + e);
  });

//dev
mongoose.set("debug", true);
mongoose.set("debug", { color: true });

//export
module.exports = mongoose;
