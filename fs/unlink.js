var fs = require('fs');

fs.unlink('demo1.txt', function(err){
	if(err) throw err;
	console.log('file deleted');
})