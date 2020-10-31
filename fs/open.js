var fs  = require('fs');
fs.open('demoopen.txt', 'w', function(err, file){
	if(err) throw err;
	console.log('saved');
	//console.log(file);
	
})