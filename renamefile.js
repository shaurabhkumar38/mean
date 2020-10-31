var fs = require('fs');
var oldpath = __dirname + "/data.txt";
var newpath = __dirname + "/first/data2.txt";

fs.rename(oldpath, newpath, function(error){
	if(error){
		console.log("error rename " + error.message);
	}
	else{
		console.log('successful rename');
	}
	
});