var fs = require('fs');
var file = ('data.txt');

fs.exist(file, function(exists){
	if(exists){
		fs.stat(file, function(err, stat){
			if(err) throw err;
			if(stat.isFile()){
				fs.readLine(file, "utf-8", function(err, data){
					
					if(err) throw err;
					console.log(data);
				});
				
			}
		});
	}
	
});