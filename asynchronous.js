var fs = require('fs');
console.log('pogram started...');
fs.readFile("data.txt", function(err, data){
	
	if(err) return console.log(err);
	console.log(data.toString());
});
console.log('program ended....');