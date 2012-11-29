var Conta = require('./models').Conta,
    Fluxo = require('./models').Fluxo,
    mongoose = require('mongoose');

function list(req, res) {
    Conta.find().sort(req.body.sort + ' ' + req.body.dir).skip(req.body.start).limit(req.body.limit).exec(function (err, contas) {
        res.json({success: true, data: contas, inicio: req.body.start, total: Conta.count()});
    });
}

function create(req, res) {
    var data = JSON.parse(req.body.data);
    var conta = Conta({nome: data.nome, flag_tipo: data.flag_tipo});
    if (data.conta_id != false)
        conta.conta_id = data.conta_id;
    conta.save(function(err, conta) {
        if (err) {
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
            console.log(err);
        }
        else
            res.json(200, {success: true, message: 'Registro salvo', data: conta});
    });
}

function update(req, res) {
    var data = JSON.parse(req.body.data);
    Conta.findByIdAndUpdate(data._id, {nome: data.nome, flag_tipo: data.flag_tipo}, function (err, conta) {
        if (err) {
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
            console.log(err);
        }
        else
            res.json(200, {success: true, message: 'Registro salvo', data: conta});
    });
}

function _delete(req, res) {
    var data = JSON.parse(req.body.data);
    if (Object.prototype.toString.call(data) === '[object Array]') {
        data.forEach(function (item) {
            Conta.findByIdAndRemove(item._id).exec();
        });
        res.json(200, {success: true, message: 'Registro excluido'});
    }
    else
        Conta.findByIdAndRemove(data._id, function (err) {
            if (err)
                res.json(200, {success: false, message: 'Erro ao excluir'});
            else
                res.json(200, {success: true, message: 'Registro excluido'});
        });
}

function grafico(req, res) {
    Conta.find().sort({nome: 'asc'}).exec(function (err, contas) {
        var resultado = [];
        contas.forEach(function (item, index, array) {
            var obj = {conta: item.nome};
            Fluxo.count({conta_id: item._id}, function (err, count) {
                obj.total = count;
                resultado.push(obj);
                if (index === array.length - 1)
                    res.json(200, resultado);
            });
        });
    });
}

exports.list = list;
exports.create = create;
exports.update = update;
exports._delete = _delete;
exports.grafico = grafico;
