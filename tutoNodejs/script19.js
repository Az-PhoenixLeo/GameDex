//GET and POST

var express = require ('express');
var path = require('path');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');


//app.use(bodyParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, resp){
	resp.sendFile('index.html', {root: path.join(__dirname, './files')});
	//resp.end(JSON.stringify(req.query));	

});

app.post('/', function(req, resp){
	//resp.sendFile('index.html', {root: path.join(__dirname, './files')});
	resp.end(JSON.stringify(req.body));

});


app.listen(1337, function() {
 	console.log('listenning at port 1337');
 });