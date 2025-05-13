const React = require("react");

function Home(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <h1>Hello, {props.name}!</h1>
        <p>This page was rendered using React on the server.</p>
      </body>
    </html>
  );
}

module.exports = Home;
