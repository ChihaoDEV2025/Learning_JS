const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyParser.json());

// Temporary store for users and their OTPs
const users = {};

// Request OTP
app.post("/request-otp", (req, res) => {
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
