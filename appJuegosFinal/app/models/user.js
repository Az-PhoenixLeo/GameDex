//app/models/user.js
//load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//define the schema for our user model
var Schema = mongoose.Schema;
var userSchema = new Schema({

	local			: {
		email		: String,
		password	: String
	},
	facebook		: {
		id			: String,
		token		: String,
		name		: String,
		email		: String
	},
	
	slug: String,
	nombre: String,
    apellidos: String,
    ocupacion: String,
    fechaNac: Date,
    descripcion: String,
    website: String,
    foto: String,
    ubicacion: String,
    token: String,
    redes: [],
    grupo: String, // Es usuario, admin, editor o colaborador
    estado: String, // activo, inactivo o eliminado
    siguiendo: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    seguidores: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    p_guardado: [{ type: Schema.Types.ObjectId, ref: 'Publish' }],
    g_guardado: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    creado: { type: Date, default: Date.now },
    modificado: { type: Date, default: Date.now },
    primeravez: Boolean
});

// methods ==========
// generating a hash

userSchema.methods.generateHash =  function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// cheking if password is valid
userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
};

//create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);