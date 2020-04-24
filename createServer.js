var http = require('http');
var fs = require('fs');

//var def_error= function(err){
//    console.log('The error is :  ',err.stack)
//};

var server = http.createServer(function(req,res){
    console.log(`....request for ${req.url} received....`);
    res.writeHead('200',{'Content-Type' : 'text/html'});
    var readSt = fs.createReadStream('basichtml.html','utf8');
    readSt.pipe(res);

    readSt.on('error',function (err){
        console.log("here is error code :  ",err.code,err.stack);
    });
});
server.listen(3000,'localhost');
console.log('currently listening to localhost:3000')

server.on('error', function (err){
        console.log('The error is :  ',err.stack)
});



 