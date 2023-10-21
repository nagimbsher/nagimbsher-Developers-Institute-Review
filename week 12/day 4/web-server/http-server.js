const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  console.log("method=>", method);
  if (url === "/") {
    if (method === "GET") {
      response.end("<h1>Home</h1>");
    } else if (method === "POST") {
    }
  } else if (url === "/about") {
    response.end("<h1>About</h1>");
  } else {
    response.end("<h1>Page not found 404</h1>");
  }
  // Send response
  //   response.end("Hello from my first web server");
});

server.listen(5000);
