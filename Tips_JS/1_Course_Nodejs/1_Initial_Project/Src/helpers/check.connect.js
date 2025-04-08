"use strict";

const mongoose = require("mongoose");

//using os to
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    //Maximum number of connections based on number of core
    const maxConnections = numCores * 5;

    console.log(`Active Connections: ${numConnection}`);

    console.log(`Memory Usage:: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log("Connection overload detected!");
    }
    //No adding the specific number => use constant number
  }, _SECONDS); //Monitor every 5 seconds
};

//import function
module.exports = { countConnect, checkOverLoad };
