var fs = require('fs');

fs.rename('demoopen.txt','demo22.txt', function(err){
	if(err) throw err;
	console.log('file renamed');
})