const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

const port = 80;
// Listen on port 3000
server.listen(port, () => {
  console.log(`Server is started ${port}`);
});
