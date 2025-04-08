"use strict";

//Level 0 => newbie

// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "db",
//   },
// };

//level 01: Handle deployment

//Database for Dev

// const dev = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "dbDev",
//   },
// };

// //Database for product
// const product= {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "dbProduct",
//   },
// };

//Level 3:
const dev = {
  app: {
    port: 3000,
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "dbDev",
  },
};

//Database for product
const product = {
  app: {
    port: 3000,
  },
  db: {
    host: "localhost",
    port: 27017,
    name: "dbProduct",
  },
};

//Initialize config => dev product are the properties
const config = { dev, product };

//Using env to hide the sensitive information : default is dev
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
