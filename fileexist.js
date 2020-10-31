var fs = require('fs');
var path = "data.txt";

fs.exists(path, function(exists){
	if(exists){
		console.log(path + " Exist");
	}
	else{
		console.log("doesnot Exist");
	}
	
})