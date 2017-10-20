'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/hola/:name', function(req,res){
	res.send({ message: `Hola ${req.params.name}!!` });
});

app.listen(port, function(){
	console.log('API REST corriendo en http://localhost:'+ port);
});  