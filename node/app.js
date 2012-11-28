var express = require('express'),
    mongoose = require('mongoose'),
    usuarioController = require('./usuarioController'),
    util = require('util');

mongoose.connect('mongodb://localhost/fluxo_caixa_node');

var app = express();

app.use(express.logger());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

app.post('/login', usuarioController.login);

app.listen(8000);
util.log('Server started');
