const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from Node.js inside Docker!</h1>');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
