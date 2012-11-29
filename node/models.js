var mongoose = require('mongoose');

var ContaSchema = new mongoose.Schema({
  id        : mongoose.Schema.ObjectId,
  conta_id  : mongoose.Schema.ObjectId,
  nome      : String,
  flag_tipo : Number
});

var FluxoSchema = new mongoose.Schema({
  id        : mongoose.Schema.ObjectId,
  conta_id  : mongoose.Schema.ObjectId,
  descricao : String,
  dt_fluxo  : Date,
  valor     : Number
});

var UsuarioSchema = new mongoose.Schema({
  id    : mongoose.Schema.ObjectId,
  nome  : String,
  email : String,
  senha : String
});

var Conta = mongoose.model('Conta', ContaSchema);
var Fluxo = mongoose.model('Fluxo', FluxoSchema);
var Usuario = mongoose.model('Usuario', UsuarioSchema);

exports.Conta = Conta;
exports.Fluxo = Fluxo;
exports.Usuario = Usuario;
