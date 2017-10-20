//GET and POST

// http://mywebsite.com/?myFile=CSCZ.zip&version=1.0

var express = require ('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, resp){
	//resp.sendFile('index.html', {root: path.join(__dirname, './files')});
	//resp.end(JSON.stringify(req.query));
	var response = "hello! " + req.query.firstName;
	resp.end(response);
	// what do? --> localhost:1337/?firstName=mehu!&lastName=mohan

});


app.listen(1337, function() {
 	console.log('listenning at port 1337');
 });