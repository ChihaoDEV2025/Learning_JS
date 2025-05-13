// index.js

const express = require("express");

//install npm
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "mySecretKey";

// ===== Login Route - Generate JWT Token =====
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Basic user check (for demo; use DB in real apps)
  if (username === "user1" && password === "password123") {
    // Generate JWT token using HS256 (default)
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// ===== Middleware to Verify JWT =====
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send("Invalid Token");
    req.user = user;
    next();
  });
}

// ===== Protected Route =====
app.get("/dashboard", authenticateToken, (req, res) => {
  res.send(`Welcome, ${req.user.username}`);
});

module.exports = app;
