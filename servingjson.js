var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead('200', {'Content-Type' : 'application/json'});
    var student = {
        name : 'ARYANT',
        gram : 'Agroli'
    };
    response.end(JSON.stringify(student));
})

server.listen(3000, 'localhost');