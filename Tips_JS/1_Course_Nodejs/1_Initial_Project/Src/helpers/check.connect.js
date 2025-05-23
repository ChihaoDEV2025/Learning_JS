"use strict";

// Require
const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

//Constant
const _SECONDS = 5000;

//Function

//countConnections
let countConnect = function () {
  const NumConnections = mongoose.connection.length;
  console.log("Number of connections: " + NumConnections);
};

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model("User", userSchema);

//checkOverload
let checkOverLoad = function () {
  //Repeat each 5 second = 5000 millisecond
  setInterval(() => {
    //connections -> cpu cores (max) -> memory usase
    //Install mogoose to active
    const numConnections = mongoose.connection.length;

    //cpus() and memoryUsage() is function => check this
    const cores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    //Active Connections
    console.log("Active Connections: " + numConnections);

    //cMemory Usage
    console.log(`Memory Usage:: ${memoryUsage / 1024 / 1024} MB`);
    //Memory usage = byte = byte / 1024*1024  = MB

    //Max connection => check
    let MaxConnections = cores * 5;

    if (numConnections > MaxConnections) {
      console.log("Connection Overload Detected!!!");
    }
  }, _SECONDS);
};

//export

module.exports = { countConnect, checkOverLoad };

//Export is similar to the name function => import as well
