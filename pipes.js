var fs = require('fs');

var readSt = fs.createReadStream('examplereadst.txt','utf8');
var writeSt = fs.createWriteStream('examplewritest');

readSt.pipe(writeSt);