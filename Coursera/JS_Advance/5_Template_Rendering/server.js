const express = require("express");
const path = require("path");
const app = express();

// Set view engine and directory
app.set("view engine", "jsx");
app.set("views", path.join(__dirname, "views"));
app.engine("jsx", require("express-react-views").createEngine());

// Middleware
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.render("Home", { name: "Alice", title: "Welcome Page" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
