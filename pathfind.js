var fs = require('fs');
var path = __dirname + "/data.txt";

fs.readFile(path, "utf8", function(error, data){
	if (error) {
		console.error("read error :" + error.message);
		
	}
	else{
		
		console.log(data);
	}
	
});
