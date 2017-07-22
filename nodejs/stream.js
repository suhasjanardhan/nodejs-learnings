var http=require('http');
var fs=require('fs');

//var mystream=fs.createReadStream(__dirname + '/content.txt','utf8');
//var mywritestream=fs.createWriteStream(__dirname + '/write.txt');

//mystream.on('data',function(chunk){
//console.log('new data read');
//mywritestream.write(chunk);
//});

var server=http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'application/json'});
//var mystream=fs.createReadStream(__dirname + '/content.txt','utf8');
//var mywritestream=fs.createWriteStream(__dirname + '/write.txt');

var obj={ name:'Suhas',
id:'011169054',
age:25};

res.end(JSON.stringify(obj));
//mystream.pipe(res);
}).listen(5000,'127.0.0.1');
