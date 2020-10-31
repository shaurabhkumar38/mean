var fs = require('fs');
var path = __dirname + "/data.txt";
var data = "WWW.write code";

fs.writeFile(path, data, function(error){
	if(error){
		
		console.log("write error " + error.message);
	}
	else{
		console.log("succesfull write " + path);
	}
	
});