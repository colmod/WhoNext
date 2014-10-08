var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    http = require('http'),
    mongoose = require('mongoose');

var appName = 'WhoNext';
var dbName = 'WhoNextDB';

var app = express();

// view engine setup
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    console.log("This is a development environment");

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });

    /*app.use(express.errorHandler());*/

    dbConfig = {
        "USER" : "",
        "PASS" : "",
        "HOST" : "127.0.0.1",
        "PORT" : "27017"
    };
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
    console.log("This is a production environment");

    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

var dbPath = "mongodb://"+dbConfig.USER + ":"+
    dbConfig.PASS + "@" +
    dbConfig.HOST + ":" +
    dbConfig.PORT + "/" +
    dbName;
var db;              // our MongoDb database

module.exports = app;

http.createServer(app).listen(app.get('port'), function() {
    console.log(appName + ' using Node, Express and Mongoose listening on port %d', app.get('port'));
    console.log('Using ' + dbName + ' at ' + dbPath);
});