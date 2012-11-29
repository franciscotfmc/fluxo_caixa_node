var Usuario = require('./models').Usuario,
    mongoose = require('mongoose');

// function insert(response, postData) {
//     var usuario = new Usuario({nome: });
// }

function list(req, res) {
    Usuario.find().sort(req.body.sort + ' ' + req.body.dir).skip(req.body.start).limit(req.body.limit).exec(function(err, usuarios) {
        res.json(200, {success: true, data: usuarios, inicio: req.body.start, total: Usuario.count()});
    });
}

function login(req, res) {
    Usuario.findOne({email: req.body.email, senha: req.body.senha}, function (err, usuario) {
        if (usuario !== null) {
            req.session.usuario = usuario._id;
            res.json(200, {success: true});
        }
        else
            res.json(200, {success: false, erro: {motivo: "E-mail ou senha inválidos"}});
    });
}

exports.login = login;
exports.list = list;
