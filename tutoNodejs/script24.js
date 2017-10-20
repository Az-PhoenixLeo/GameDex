
var express = require('express');
var app = express();
var router = express.Router();

app.use('/users', router);

router.get('/:username', function(req, resp){
	resp.end(JSON.stringify(req.params));
});

app.listen(1337, function(){
	console.log('I\'m list... now');
});