var Conta = require('./models').Conta,
    mongoose = require('mongoose');

function list(req, res) {
    Conta.find().sort(req.body.sort + ' ' + req.body.dir).skip(req.body.start).limit(req.body.limit).exec(function (err, contas) {
        res.json({success: true, data: contas, inicio: req.body.start, total: Conta.count()});
    });
}

exports.list = list;
