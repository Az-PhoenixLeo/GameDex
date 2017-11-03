'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)

//registro de usuario
api.post('/signup', userCtrl.signUp)
//logeo de usuario
api.post('/signin', userCtrl.signIn)
//ruta de autenticción privada a un middleware
api.get('/private', auth, function(req, res){
	res.status(200).send({message: 'Tienes acceso men!!'})
})

module.exports = api