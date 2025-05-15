let http = require("http");

http
  .createServer((req, res) => {
    //callback with req and res

    res.write("Hello from server");
    res.end();
  })
  .listen(6000); //Listen at 6000 port
