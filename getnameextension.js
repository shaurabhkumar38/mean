var path = require('path');
var filename = "nodejs/program/app/demo.js"; 
var extension = path.extname(filename);
var file = path.basename(filename);

console.log(file);
console.log(extension);
