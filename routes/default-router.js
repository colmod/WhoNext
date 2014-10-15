module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendfile('public/views/index.html');
    });

    /// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('I received a 404 while accessing the API');
        err.status = 404;
        next(err);
    });
};
