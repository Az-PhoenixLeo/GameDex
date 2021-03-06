'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp(req, res){
	const user = new User({
		email: req.body.email,
		displayName: req.body.displayName,
		password: req.body.password
	})

	user.save(function(err){
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})

		return res.status(201).send({token: service.createToken(user) })
	})
}

//funcion de acceso, de logueo
function signIn(req, res){
	user.find({ email: req.body.email }, function(err, user){
		if(err) return res.status(500).send({ message: err })
		if(!user) return res.status(404).send({ message: 'No existe el usuario, gasparin'})

		req.user = user
		res.status(200).send({
			message: 'Te loguIaste bien',
			//token al cliente del usuario
			token: service.createToken(user)
		})
	})
}


module.exports = {
	signUp,
	signIn
}