"use strict"; //explain here

const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");
const connectString = `mongodb://${host}:${port}/${name}`;

//"mongodb://localhost:27017/shopDEV"

//count Connection in ./helpers/check.connect.js
const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) =>
        //add here to check connection
        console.log("Connected Mongodb Success Pro: ", countConnect())
      )
      .catch((err) => {
        console.log("Error Connect");
      });
  }

  //static => instance of class , not static => instance of object
  static getInstance() {
    //further checking
    if (!Database.instance) {
      Database.instance = new Database();
    }

    //most important
    return Database.instance;
  }
}

//create variable to get instance
const instanceMongoDB = Database.getInstance();

//export instance
module.exports = instanceMongoDB; //It will create a new connection => collision
