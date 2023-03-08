const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1> Hello Node !!! </h1>");
    res.end();
  }
  /*   if (req.url === "/about") {
    res.write("<h1> Hello from About !! </h1>");
    res.end();
  } */
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("server is running on port 3000");
});
