// http://localhost/howTpControlThis/this/sadasdad/asd

var express = require('express');
var app = express();
var router = express.Router();

app.use('/myFirstRoute', router);

router.get('/heyThereFirstRoute', function(req, resp){
	resp.end('What is going on!');
});

router.get('/sub2', function(req, resp){
	resp.end('What is going on there, this is abit different');
});

app.listen(1337, function(){
	console.log('I\'m listenning... now');
});