const http = require("http");

console.log(process.version);

global.name= "node"

console.log(name);
console.log(__dirname);
console.log(__filename);


const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write("Server is working...");
  res.end();
});

server.listen(5000, () => {
  console.log("Server is working");
});
