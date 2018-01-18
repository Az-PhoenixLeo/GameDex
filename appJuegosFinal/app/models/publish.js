// Modelo PUBLISH

// app/models/publicacion.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var URLSlugs = require('mongoose-url-slugs');

var Schema       = mongoose.Schema;

var publicacionSchema   = new Schema({
    titulo: String,
    intro: String,
    usuario: { type: Schema.Types.ObjectId, ref: 'User' },
    contenido: String,
    portada: String,
    imgs: String,
    estado: String, //activo, revision, contruccion
    staff: Boolean,

    papelera: { type: Boolean, default: false},
    destacado: { type: Boolean, default: false},

    favs: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    guardados: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },

    activo: Boolean,
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    creado: { type: Date, default: Date.now },
    modificado: Date,
    publicado: Date,
    selecDate: Date
});

publicacionSchema.plugin(URLSlugs('titulo', {update: true}));

module.exports = mongoose.model('Publ', publicacionSchema);


