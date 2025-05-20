//app.js
//http://localhost:3055/
//Env file

require("dotenv").config();
//1. Require express
const express = require("express");
const app = express();

app.use(express.json());
//Require Middleware
const morgan = require("morgan");
const helmet = require("helmet");

//2. Init middleware
app.use(morgan("dev"));
app.use(helmet());

//3. init db
require("./dbs/init.mongodb");

//to extract the function
const { countConnection } = require("./helpers/check.connect");

//check overload
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();
countConnection();

//-------------------------------------------------
//3.1 init router //cut here

// app.get("/", (req, res, next) => {
//   return res.status(200).json({
//     message: "Welcome Here ",
//   });
// });

//instead of
//Just using App one times due to router will receive more address
    app.use("/", require("./routers/index"));

//-------------------------------------------------

//4. Handling Errors

//The last one
module.exports = app;
