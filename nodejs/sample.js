var http=require('http');

var server=http.createServer(function(req,res){
console.log('request url' + req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
res.end('OK');
}).listen(5000,'127.0.0.1');
