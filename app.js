
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var partials = require('express-partials');
var http = require('http');
var path = require('path');

var Service = require('./models/Service.js');

var app = express();
app.use(partials());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());
app.use(express.cookieSession({secret: '123123123asdf'}));

app.get('/', routes.index);
app.get('/service', routes.create);
app.post('/service/create', routes.processCreation);


app.listen(process.env.PORT);