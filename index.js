const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

const port = 80;
const host = "0.0.0.0";
// Listen on port 3000
server.listen(port, host, () => {
  console.log(`Server is started ${port}`);
});
