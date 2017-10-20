var express = require ('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function(req, resp){
	resp.cookie('myFirstCookie', 'looks Good');
	resp.end("oli");
});

app.get('/removeCookie', function(req, resp){
	resp.clearCookie('myFirstCookie', 'looks Good');
	resp.end("oli");
});

app.listen(1337, function(){
	console.log("Escuchando por el puerto 1337");
});