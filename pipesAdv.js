var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log('currently accessing.........',req.url);
	res.writeHead('200',{'Content-Type' : 'text/plain'});
	var readSt = fs.createReadStream('examplereadst.txt','utf8');
	readSt.pipe(res);
	//res.end('\n\nTHE END')
});

server.listen(3000,'localhost');
console.log('...listening to localhost:3000');