var UserModel = require('../models/User.js');

module.exports = function(app) {

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    app.get('/api', function (req, res) {
        res.json({ message: 'what are you doing - what are you trying to accomplish?' });
    });

    // Get all users
    app.get('/api/user', function (req, res) {
        return UserModel.find(function (err, user) {
            if (!err) {
                return res.json(user);
            }
            else {
                return console.log(err);
            }
        })
    });

    // Get user by id
    app.get('/api/user/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            if (!err) {
                return res.json(user);
            }
            else {
                return console.log(err);
            }
        })
    });

    // Create user item
    app.post('/api/user', function (req, res) {
        console.log("POST: " + req.body);

        var user = new UserModel({username: req.body.username, password: req.body.password});
        user.save(function (err) {
            if (!err) {
                return console.log("created");
            } else {
                return console.log(err);
            }
        });
        return res.json(user);
    });

    // Update user item
    app.put('/api/user/:id', function (req, res) {
        console.log("PUT (id= " + req.params.id + "): " + req.body);

        return UserModel.findById(req.params.id, function (err, user) {
            user.username = req.body.username;
            user.password = req.body.password;

            return user.save(function (err) {
                if (!err) {
                    console.log("updated");
                } else {
                    console.log(err);
                }
                return res.json(user);
            });
        });
    });

    // Delete this user
    app.delete('/api/user/:id', function (req, res) {
        return UserModel.findById(req.params.id, function (err, user) {
            return user.remove(function (err) {
                if (!err) {
                    console.log("Removed user: " + req.params.id);
                    return res.json(user);
                }
                else {
                    return console.log(err);
                }
            })
        })
    });

    // Bulk destroy all users
    app.delete('/api/user', function (req, res) {
        UserModel.remove(function (err) {
            if (!err) {
                console.log("Removed all users");
                return res.json('');
            } else {
                console.log(err);
            }
        });
    });
};
