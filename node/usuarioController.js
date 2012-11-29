var Usuario = require('./models').Usuario,
    mongoose = require('mongoose');

function list(req, res) {
    Usuario.find().sort(req.body.sort + ' ' + req.body.dir).skip(req.body.start).limit(req.body.limit).exec(function(err, usuarios) {
        res.json(200, {success: true, data: usuarios, inicio: req.body.start, total: Usuario.count()});
    });
}

function create(req, res) {
    var data = JSON.parse(req.body.data);
    var usuario = new Usuario({nome: data.nome, email: data.email, senha: data.senha});
    usuario.save(function (err, usuario) {
        if (err)
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
        else
            res.json(200, {success: true, message: 'Registro salvo', data: usuario});
    });
}

function update(req, res) {
    var data = JSON.parse(req.body.data);
    Usuario.findByIdAndUpdate(data._id, {nome: data.nome, email: data.email, senha: data.senha}, function (err, usuario) {
        if (err)
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
        else
            res.json(200, {success: true, message: 'Registro salvo', data: usuario});
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
exports.create = create;
exports.update = update;
