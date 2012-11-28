var Usuario = require('./models').Usuario,
    mongoose = require('mongoose');

// function insert(response, postData) {
//     var usuario = new Usuario({nome: });
// }

function login(req, res) {
    Usuario.findOne({email: req.body.email, senha: req.body.senha}, function (err, usuario) {
        if (usuario !== null) {
            // Criar sessão
            res.json(200, {success: true});
        }
        else
            res.json(200, {success: false, erro: {motivo: "E-mail ou senha inválidos"}});
    });
}

exports.login = login;
