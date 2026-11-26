const http = require("http");

function add(a, b) {
  return a + b;
}

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === "/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from the server");
    }
  });
}

module.exports = { add, createServer };