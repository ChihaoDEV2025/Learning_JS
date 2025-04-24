//Declare express  + app

const express = require("express");
const app = express();

//Authentication => npm
// const bodyParser = require("body-parser"); => integrate with express

const crypto = require("crypto");

app.use(express.json()); // This will allow you to parse JSON request bodies

// Temporary store for users and their OTPs
const users = {};

// Request OTP
app.post("/request-otp", (req, res) => {
  //
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  // Generate a 6-digit OTP
  const otp = crypto.randomInt(100000, 999999);
  users[email] = otp;

  console.log(`OTP for ${email}: ${otp}`); // Simulate sending OTP via email
  res.send("OTP sent to email");
});

// Verify OTP
app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).send("Email and OTP are required");
  }

  if (users[email] && users[email] === otp) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid OTP");
  }
});

module.exports = app;
