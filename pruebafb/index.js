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

app.listen(8080);