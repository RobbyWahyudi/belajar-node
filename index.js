let http = require("http");
let tanggal = require("./tanggal");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Saat ini tanggal " + tanggal.myDateTime());
    res.end();
  })
  .listen(8080);
