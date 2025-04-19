// app.js
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser"); // To parse JSON body

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Middleware for session management
app.use(
  session({
    secret: "mySecretKey", // Used to sign session ID cookie
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure: true if using HTTPS
  })
);

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy user validation
  if (username === "user1" && password === "password123") {
    req.session.user = username; // Store username in session
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Protected Route
app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome, ${req.session.user}`);
  } else {
    res.status(401).send("Please log in");
  }
});

// Logout Route (optional)
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Logout failed");
    }
    res.send("Logged out successfully");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
