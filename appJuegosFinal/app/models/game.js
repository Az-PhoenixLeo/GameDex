// Modelo GAME
// app/models/publicacion.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var URLSlugs = require('mongoose-url-slugs');

var Schema       = mongoose.Schema;

var publicacionSchema   = new Schema({
    slug: String,
    titulo: String,
    portada: String,
    intro: String,
    contenido: String,
    usuario: { type: Schema.Types.ObjectId, ref: 'User' },

    likes: { type: Number, default: 0 },
    guardados: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    favs: { type: Number, default: 0 },

    imgs: [String],
    link: String,
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    estado: String, //activo, revision, contruccion
    plataforma: String, 
    
    creado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now },
    publicado: Date
});

publicacionSchema.plugin(URLSlugs('titulo', {update: true}));

module.exports = mongoose.model('Game', publicacionSchema);
