'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
	name: String,
	picture: String,
	price: {type: Number, default: 0},
	category: {type: String, enum: ['computers', 'phones', 'accesories']},
	description: String
});

//para crear el modelo de mongoose y poder exportarla
module.exports = mongoose.model('Product', ProductSchema);