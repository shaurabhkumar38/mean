var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200,{"content-type":"text/plain"});
	res.end("Welcome Node Js");
	
})
server.listen(1234, function(){
	
	console.log("server started...");
});