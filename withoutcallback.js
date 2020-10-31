var fs = require('fs');
console.log('program started..');
var data = fs.readFileSync('data.txt');
console.log(data.toString());
console.log('program End...');