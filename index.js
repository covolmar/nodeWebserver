// amazing WinKP Update Server made by COM!

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("new Connection to the amazing WinKP HTTP Update Server!");
  if(req.url === "/update") {
    fs.readFile('C:/Data/WinKPUpdates.txt', 'utf8', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
      console.log("Update File was requested from " + req.hostname);
      //console.log(data);
    });
  }
  else if (req.url === "/patch") {
    fs.readFile('C:/Data/RIFLEX WinKP 2.13.03 Patch New SSP.exe', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Patch was requested from " + req.hostname);
    });
  }
  else if (req.url === "/upgrade") {
    fs.readFile('C:/Data/RIFLEX WinKP 2.13.04.exe', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Upgrade was requested from " + req.hostname);
    });
  }

}).listen(8080);

console.log("WinKP Update Server is up and ready. Listening on Localhost:8080..");
