var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
if(req.url === '/home' || req.url === '/')
{
res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);
}
else if(req.url === '/contacts')
{
res.writeHEad(200,{'Content-Type':'text/html'});
fs.createReadStream(__dirname + '/contacts.html','utf8').pipe(res);
}
else if(req.url === '/api/days')
{
var obj={first:'mon',second:'tue',third:'wed',fourth:'thur',fifth:'fri',sixth:'sat',seventh:'sun'};
res.writeHead(200,{'Content-Type':'application/json'});
res.end(JSON.stringify(obj));
}
else
{
res.writeHead(400,{'Content-Type':'text/plain'});
fs.createReadStream(__dirname + '/404.html','utf8').pipe(res);
}
}).listen(5000,'127.0.0.1');
