var ContaSchema = new Schema({
  id        : ObjectId,
  conta_id  : ObjectId,
  nome      : String, 
  flag      : Number
});

var FluxoSchema = new Schema({
  id        : ObjectId,
  conta_id  : ObjectId,
  descricao : String, 
  dt_fluxo  : Date,
  valor     : Number
});

var UsuarioSchema = new Schema({
  id    : ObjectId,
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
