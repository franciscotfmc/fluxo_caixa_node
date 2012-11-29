var express = require('express'),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongoose')(express),
    usuarioController = require('./usuarioController'),
    util = require('util');

mongoose.connect('mongodb://localhost/fluxo_caixa_node');

var app = express();

app.use(express.logger());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({store: new mongoStore(), secret: '8be63522-150f-43e0-9092-b7341074c007'}));

app.get('/', function (req, res, next) {
    if (req.session.usuario !== undefined)
        res.redirect('/principal.html');
    else
        next();
});
app.get('/principal.html', function (req, res, next) {
    if (req.session.usuario !== undefined)
        next();
    else
        res.redirect('/');
});

app.use(express.static(__dirname + '/public'));

app.post('/login', usuarioController.login);
app.post('/usuarios/list', usuarioController.list);
app.post('/usuarios/create', usuarioController.create);
app.post('/usuarios/update', usuarioController.update);
app.post('/usuarios/delete', usuarioController.delete);

app.listen(8000);
util.log('Server started');
