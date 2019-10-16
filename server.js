var http = require("http");

const server = http.createServer((request, response) => {
  //response.writeHead(200);

  var url = request.url;

  if (url === "/") {
    response.write("Hello World");
    response.end();
  } else if (url === "/goodbye") {
    response.write("Goodbye World");
    response.end();
  } else if (url === "/error") {
    response.statusCode = 500;
    response.end(JSON.stringify({ error: "server error" }));
  }
});

server.listen(3000);
//console.log("hello");
