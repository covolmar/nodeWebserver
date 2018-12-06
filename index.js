// amazing WinKP Update Server made by COM!

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("new Connection to the amazing WinKP HTTP Update Server!");
  if(req.url === "/update") {
    fs.readFile('C:/Paket/WinKPInstallCD/WinKPUpdates.txt', 'utf8', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
      console.log("Update File was requested from " + req.hostname);
      //console.log(data);
    });
  }
  else if (req.url === "/upgrade") {
    fs.readFile('C:/Paket/WinKPInstallCD/RIFLEX WinKP 2.13.03.msi', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Upgrade was requested from " + req.hostname);
    });
  }
  else if (req.url === "/patch") {
    fs.readFile('C:/Paket/WinKPInstallCD/RIFLEX WinKP Patch 2.13.03.msp', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Patch was requested from " + req.hostname);
    });
  }
  else if (req.url === "/patch/buildIncrement") {
    fs.readFile('C:/Paket/WinKPInstallCD/RIFLEX WinKP PatchForBuild 2.13.03.msp', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Upgrade was requested from " + req.hostname);
    });
  }

}).listen(8080);

console.log("WinKP Update Server is up and ready. Listening on Localhost:8080..");
