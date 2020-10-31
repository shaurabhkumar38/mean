var fs = require('fs');

fs.appendFile('demo1.txt', 'Welcome to Future', function(err){
	
	if(err) throw err;
	
	console.log('saved');
})