//get express router

const express = require("express");
const router = express.Router();

//get controllers
const accessControllers = require("../../controllers/access.controller");

//signUp -> Using more HTTP request instead of using in routers/index or app.js
router.post("/shop/signup", accessControllers.signUp);

//export
module.exports = router;
