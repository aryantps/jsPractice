"use strict";
var fs = require('fs');

var readStream = fs.createReadStream('examplereadst.txt','utf8');
var writeStream = fs.createWriteStream('examplewritest');

//data event fired when data is available to read
readStream.on('data', function(chunk){
	console.log('new chunk received');
	writeStream.write(chunk);
});
writeStream.on('error', function(err){
	console.log('error :  ',err.stack);
});

