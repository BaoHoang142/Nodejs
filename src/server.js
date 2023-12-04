var http = require('http');//ES5
var fs = require('fs');
let server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end("<h1>hello</h1>");
fs.readFileSync('index.html',"utf-8", function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})
server.listen(8860,()=> {
    console.log("server đang lắng nghe");
})