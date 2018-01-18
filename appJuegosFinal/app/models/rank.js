// Modelo RANK
// app/models/publicacion.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var URLSlugs = require('mongoose-url-slugs');

var Schema       = mongoose.Schema;

var publicacionSchema   = new Schema({
    juego: { type: Schema.Types.ObjectId, ref: 'Game' },
    usuario: { type: Schema.Types.ObjectId, ref: 'User' },
    calificacion: { type: Number, default: 0 }, //FALTA LA FUNCION
    creado: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', publicacionSchema);
