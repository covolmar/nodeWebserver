// amazing WinKP Update Server made by COM!

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  console.log("new Connection to the amazing WinKP HTTP Update Server!");
  if(req.url === "/update") {
    fs.readFile('C:/Data/update.txt', 'utf8', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
      console.log("Update File was requested from" + req.hostname);
      //console.log(data);
    });
  }
  else if (req.url === "/patch") {
    fs.readFile('C:/Data/WinKP 2.13 Patch.exe', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      console.log("Patch was requested from" + req.hostname);
    });
  }

}).listen(8080);
