'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, function(err, res){
	if(err){
		console.log('Error al conectar a la base de datos' + err);
	}
	console.log('Conexión a la base de datos establecida');
	
	app.listen(config.port, function(){
	console.log('API REST corriendo en http://localhost:'+ config.port);
	});  
});

