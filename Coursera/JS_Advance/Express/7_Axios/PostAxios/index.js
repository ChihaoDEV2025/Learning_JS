//install npm init -y , express , axios

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "User created", user: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
