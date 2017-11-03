'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const api = require('./routes')

/* EJEMPLO
app.get('/hola/:name', function(req,res){
	res.send({ message: `Hola ${req.params.name}!!` });
});
*/

app.use('/api', api)

module.exports = app