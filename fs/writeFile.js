var fs = require('fs');

fs.writeFile('demo1.txt','Hello World', function(err){
	if(err) throw err;
	console.log('saved');
})