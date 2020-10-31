var fs = require('fs');
fs.readFileSync('demo.txt', function(err, data){
if(err){
	
	console.log(err);
}	
else{
	
	console.log('Async data = ' + data.toString());
	
}
	
})

console.log('This async data is end');

var data = fs.readFileSync('demo.txt');
console.log('Sync Data is ' + data.toString());
console.log('this is the end')