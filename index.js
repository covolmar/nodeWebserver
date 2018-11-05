// WinKP Update Server!

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if(req.url === "/update") {
    fs.readFile('C:/Data/update.txt', 'utf8', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write(data);
      res.end();
      //console.log(data);
    });
  }
  else if (req.url === "/patch") {
    fs.readFile('C:/Data/WinKP 2.13 Patch.exe', function(err, data) {
      if (err) throw err;
      res.writeHead(200, {"Content-Type": "application/exe"});
      res.write(data);
      res.end();
      //console.log(data);
    });
  }

}).listen(8080);
