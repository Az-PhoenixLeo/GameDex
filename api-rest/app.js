'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('.hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs'
}))
app.set('view engine', '.hbs')



/* EJEMPLO
app.get('/hola/:name', function(req,res){
	res.send({ message: `Hola ${req.params.name}!!` });
});
*/

app.use('/api', api)
app.get('/login', function(req, res){
	res.render('login')
})

module.exports = app