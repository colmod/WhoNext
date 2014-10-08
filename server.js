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
//app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set up API routes
var apiRouter = require('./routes/api-router.js')(app);

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    console.log("This is a development environment");

    dbConfig = {
        "user" : "",
        "password" : "",
        "host" : "127.0.0.1",
        "port" : "27017"
    };
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
    console.log("This is a production environment");

    dbConfig = {
        "user": "",
        "password": "",
        "host": "ec2-54-77-174-227.eu-west-1.compute.amazonaws.com",
        "port": "27017"
    };
}

var dbURL = 'mongodb://' + dbConfig.user + ':' + dbConfig.password + '@' + dbConfig.host + ':' + dbConfig.port + '/' + dbName + '';
var db = require('./config/database')(dbURL);

mongoose.connect(db, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + dbURL + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + dbURL);
    }
});

module.exports = app;

http.createServer(app).listen(app.get('port'), function() {
    console.log(appName + ' using Node, Express and Mongoose listening on port %d', app.get('port'));
    console.log('Using ' + dbName + ' at ' + dbURL);
});