//get express router

const express = require("express");
const router = express.Router();

//get controllers
const accessControllers = require("../../controllers/access.controller");

//signUp
router.post("/shop/signup", accessControllers.signUp);

//export
module.exports = router;
