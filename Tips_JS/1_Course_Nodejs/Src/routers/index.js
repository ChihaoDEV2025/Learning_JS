//models -> routers -> index.js => this will be a default file to set router

//cut init router from app to router
"use strict";

const express = require("express");
const router = express.Router();

//

router.use("v1/api", require("./access"));

//-----------------------------------------------------------
//note here : not '/' - not use this stuff-> break them into smaller
// router.get("", (req, res, next) => {
//   return res.status(200).json({
//     message: "Welcome Fan tip js",
//   });
// });
//-----------------------------------------------------------

//export
module.exports = router;
