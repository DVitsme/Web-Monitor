const http = require('http');
const url = require('url');
const PORT = 3000 || process.env.PORT;

const server = http.createServer((req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true);
  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); // RegEx to handle slashes at the end of urls ex(localhost:3000/foo/)
  // Send the response
  res.end('Hello World\n');

  // Log the request path
  console.log(`Request received on path: ${trimmedPath}`);
});

// Start server
server.listen(PORT, function() {
  console.log(`Server Runinng on Port: ${PORT}`);
});
