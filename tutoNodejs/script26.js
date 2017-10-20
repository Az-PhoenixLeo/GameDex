 //GET and POST
var express = require ('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
var session;

var app = express();
app.use('/cssFiles', express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessions({
	secret: 'qwertyasdasdasd',
	resave: false,
	saveUninitialized: false
}));

app.get('/login', function(req, resp){
	session = req.session;
	if(session.uniqueID){
		resp.redirect('/redirects');
	}
	resp.sendFile('./files/login.html', {root: __dirname});
});

app.post('/login',function(req,resp){
	//resp.end(JSON.stringify(req.body));
	session = req.session;
	if(session.uniqueID){
		resp.redirect('/redirects');
	}
	//if(req.body.username == 'admin' && req.body.password == 'admin'){
		session.uniqueID = req.body.username;
	//}
	resp.redirect('/redirects');
});

app.get('/logout', function(req, resp){
	req.session.destroy();
	resp.redirect('/login');
});

app.get('/admin', function(req, resp){
	session = req.session;
	if(session.uniqueID != 'admin'){
		resp.end('No autorizado para acceder');
	}
	resp.send('Eres el administrador.' + '<br/>Para salir... <a href="/logout">KILL SESSION<a/>');
})

app.get('/redirects', function(req,resp){
	session = req.session;
	if(session.uniqueID == 'admin'){
		console.log(session.uniqueID);
		resp.redirect('/admin');
	}else{
		resp.send(req.session.uniqueID + '<br/> <a href="/logout">KILL SESSION<a/>');
	}
});

app.listen(1337, function() {
 	console.log('Te estoy escuchando por el port 1337');
 });