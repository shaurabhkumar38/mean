console.log("current working directories " + process.cwd());
try{
	process.chdir('/');
}
catch(exception){
	console.error("chdir error " + exception.message);
}
console.log('current working directories is now ' + process.cwd());