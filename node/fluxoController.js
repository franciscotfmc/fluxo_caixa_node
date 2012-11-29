var Fluxo = require('./models').Fluxo,
    mongoose = require('mongoose');

function list(req, res) {
    Fluxo.find().sort(req.body.sort + ' ' + req.body.dir).skip(req.body.start).limit(req.body.limit).exec(function (err, fluxos) {
        res.json({success: true, data: fluxos, inicio: req.body.start, total: Fluxo.count()});
    });
}

function create(req, res) {
    var data = JSON.parse(req.body.data);
    console.log(data.dt_fluxo);
    console.dir(data.dt_fluxo);
    var fluxo = Fluxo({conta_id: data.conta_id, descricao: data.descricao, dt_fluxo: data.dt_fluxo, valor: data.valor});
    fluxo.save(function(err, fluxo) {
        console.dir(fluxo);
        if (err) {
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
            console.log(err);
        }
        else
            res.json(200, {success: true, message: 'Registro salvo', data: fluxo});
    });
}

function update(req, res) {
    var data = JSON.parse(req.body.data);
    Fluxo.findByIdAndUpdate(data._id, {conta_id: data.conta_id, descricao: data.descricao, dt_fluxo: data.dt_fluxo, valor: data.valor}, function (err, fluxo) {
        if (err) {
            res.json(200, {success: false, message: 'Erro ao salvar no banco de dados'});
            console.log(err);
        }
        else
            res.json(200, {success: true, message: 'Registro salvo', data: fluxo});
    });
}

function _delete(req, res) {
    var data = JSON.parse(req.body.data);
    if (Object.prototype.toString.call(data) === '[object Array]') {
        data.forEach(function (item) {
            Fluxo.findByIdAndRemove(item._id).exec();
        });
        res.json(200, {success: true, message: 'Registro excluido'});
    }
    else
        Fluxo.findByIdAndRemove(data._id, function (err) {
            if (err)
                res.json(200, {success: false, message: 'Erro ao excluir'});
            else
                res.json(200, {success: true, message: 'Registro excluido'});
        });
}

exports.list = list;
exports.create = create;
exports.update = update;
exports._delete = _delete;
