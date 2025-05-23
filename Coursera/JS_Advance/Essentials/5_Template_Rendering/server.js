

const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
r
const app = express();

const Home = require("./views/Home");

app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Home, { name: "Alice", title: "Welcome Page" })
  );
  res.send("<!DOCTYPE html>" + html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
