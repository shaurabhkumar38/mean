var fs = require('fs');
var path = __dirname + "/mydir";

fs.rmdir(path, function(error){
	if(error){
		console.log("mkdir error " + error.message);
	}
});