var express = require('express');


var app =express();

app.get('/home', function(req,res){
    res.send('Welcome to homepage');
});
app.get('/404', function(req,res){
    res.sendFile(__dirname + '/error404.html'); 
});
app.get('/home/:page',function(req,res){
    res.send(req.params.page + ' page was requested. ');
});
app.get('/package',function(req,res){
    res.sendFile(__dirname +'/package.json');
});
app.listen(3000);
