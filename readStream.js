"use strict";
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/examplereadst.txt','utf8');
//readStream.setEncoding('utf8');

//because createReadStream inherits from eventEmitter
readStream.on('data', function(chunk){
	console.log('new chunk received :  ');
	console.log(chunk);
});
readStream.on('end', function(){
	console.log('----NO MORE DATA TO READ----');
});
readStream.on('error', function(err){
	console.log('The error is :  ',err);
});
