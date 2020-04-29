var express = require('express');

var app = express()
app.set('view engine', 'ejs');
app.listen(3000);
console.log('Currently listening on localhost:3000 or [::1]:3000/')

app.get('/404', function(req, res){
    res.sendFile(__dirname + '/error404.html');
});


app.get('/:name', function(req,res){
    var additional_info = {job : 'software engineer', yearPassing : '2021', prog_lang : ['Python', 'C++', 'JavaScript','PHP'] };
    res.render('usingtemp',{person : req.params.name, additional_info : additional_info});
});