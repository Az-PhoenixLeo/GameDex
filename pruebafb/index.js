var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

//set middleware
app.use(bodyParser.json());
app.use(session({
	secret: 'da illest developer',
	resave: true,
	saveUninitialized: true
}));

var FACEBOOK_APP_ID = '1027871424017894',
	FACEBOOK_APP_SECRET = '07b28004a49bae13fa5be3c234727ced';

var fbOpts = {
	clientID: FACEBOOK_APP_ID,
	clientSecret: FACEBOOK_APP_SECRET,
	callbackURL: 'http://localhost:8080/auth/facebook/callback'
};

var fbCallback = function(accessToken, refreshToken, profile, cb){

};

passport.use(new FacebookStrategy(fbOpts, fbCallback));

app.route('/')
	.get(function(req, res){
		res.send('hello foo bar')
	});

app.route('/auth/facebook/callback')
	.get(function(req, res){
		res.send('esta cosa checa el status de la petición. :p !');
	})

app.listen(8080);