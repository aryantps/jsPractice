var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log(`...request for ${req.url} received....`)
    if (req.url === '/'){
        res.writeHead('200', {'Content-Type' : 'text/html'});
        var readSt = fs.createReadStream('basichtml.html', 'utf8');
        readSt.pipe(res);
    }
    else{
        res.writeHead('404', {'Content-Type' : 'text/html'});
        var readSt = fs.createReadStream('error404.html', 'utf8');
        readSt.pipe(res);
    }
});

server.listen(3000,'localhost');
console.log('Server running at localhost:3000');
server.on('error', function(err){
    console.log(err.info);
});

