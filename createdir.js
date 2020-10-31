var fs = require('fs');
var path = __dirname + "/mydir";

fs.mkdir(path, function(error){
	if(error){
		console.log("mkdir error " + error.message);
	}
});