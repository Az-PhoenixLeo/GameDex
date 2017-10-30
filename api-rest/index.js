'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const Product = require('./models/product')

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* EJEMPLO
app.get('/hola/:name', function(req,res){
	res.send({ message: `Hola ${req.params.name}!!` });
});
*/

app.get('/api/product', function(req, res){
	Product.find({}, function(err, products){
		if(err)
		{
			return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
		} 
		if(!products)
		{
			return res.status(404).send({message: `El producto no existe`});
		} 
		res.status(200).send({products});
	})
});

app.get('/api/product/:productId', function(req, res){
	let productId = req.params.productId;

	Product.findById(productId, function(err, product){
		if(err)
		{
				return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
		} 
		if(!product)
		{
			return res.status(404).send({message: `El producto no existe`});
		} 
		res.status(200).send({product});
	})
});

app.post('/api/product', function(req, res){
	console.log('POST /api/product');
	console.log(req.body);

	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save(function(err, productStored) {
		if(err) 
		{
			res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})
			console.log("error al salvar en bd");
		}
		res.status(200).send({product: productStored});
		console.log('Se salvó en la base de datos');
	})
})

app.put('/api/product/:productId', function(req, res){
	let productId = req.params.productId;
	let update = req.body;

	Product.findByIdAndUpdate(productId, update, function(err, productUpdated){
		if(err)
		{
			res.status(500).send({message: `Error al actualizar producto: ${err}`});
		}
		res.status(200).send({product: productUpdated});
	})
});

app.delete('/api/product/:productId', function(req,res){
	let productId = req.params.productId;

	Product.findById(productId, function(err, product){
		if(err)
		{
			res.status(500).send({ message: `Error al borrar el producto: ${err}`})
		}
		product.remove(function(err) {
			if(err)
			{
				res.status(500).send({message: `Error al borrar el producto: ${err}`});
			}
			res.status(200).send({message: `El producto ha sido eliminado`});
		})
	})
})

mongoose.connect('localhost:27017/shop', function(err, res){
	if(err){
		console.log('Error al conectar a la base de datos' + err);
	}
	console.log('Conexión a la base de datos establecida');
	
	app.listen(port, function(){
	console.log('API REST corriendo en http://localhost:'+ port);
	});  
});


/*
mongoose.connect('mongodb://localhost:27017/shop', {useMongoClient:true})
    .then(() => app.listen(port, () => console.log(`Api REST running on http://localhost:${port}`)))
    .catch((err) => {
        if(err) throw err
        	console.log('error');
    })﻿;
*/