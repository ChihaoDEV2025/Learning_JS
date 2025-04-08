//http://localhost:3055/
//Env file

require("dotenv").config();
//1. Require express
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

//2. Init middleware
app.use(morgan("dev"));
app.use(helmet());

//3. init db
require("./dbs/init.mongodb");

//to extract the function
const { countConnect } = require("./helpers/check.connect");

//check overload
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();
countConnect();

//-------------------------------------------------
//3.1 init router //cut here

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Welcome Here ",
//   });
// });

//instead of
app.use("/", require("./routers/index"));

//-------------------------------------------------

//4. Handling Errors

//The last one
module.exports = app;
