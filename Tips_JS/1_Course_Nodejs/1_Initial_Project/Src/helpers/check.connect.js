"use strict";

const mongoose = require("mongoose");

const os = require("os");
const process = require("process");
const _SECONDS = 5000;
//countConnections
let countConnection = function () {
  const NumConnections = mongoose.connection.length;
  console.log("Number of connections: " + NumConnections);
};

//checkOverload
let checkOverLoad = function () {
  //Repeat each 5 second = 5000 millisecond
  setInterval(() => {
    //connections -> cpu cores (max) -> memory usase
    const numConnections = mongoose.connection.length;
    const cores = os.cpus.length;
    const memoryUsage = process.memoryUsage.rss;

    //Active Connections
    console.log("Active Connections: " + connections);

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

module.exports = { countConnection, checkOverLoad };
