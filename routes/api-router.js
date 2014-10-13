var ListModel = require('../models/List.js');

module.exports = function(app) {

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    app.get('/api', function (req, res) {
        res.json({ message: 'what are you doing - what are you trying to accomplish?' });
    });

    // Get all lists
    app.get('/api/list', function (req, res) {
        return ListModel.find(function (err, list) {
            if (!err) {
                return res.json(list);
            }
            else {
                return console.log(err);
            }
        })
    });

    // Get list by id
    app.get('/api/list/:id', function (req, res) {
        return ListModel.findById(req.params.id, function (err, list) {
            if (!err) {
                return res.json(list);
            }
            else {
                return console.log(err);
            }
        })
    });

    // Create list item
    app.post('/api/list', function (req, res) {
        console.log("POST: " + req.body);

        var list = new ListModel({name: req.body.name, members: req.body.members});
        list.save(function (err) {
            if (!err) {
                return console.log("created");
            } else {
                return console.log(err);
            }
        });
        return res.json(list);
    });

    // Update list item
    app.put('/api/list/:id', function (req, res) {
        console.log("PUT (id= " + req.params.id + "): " + req.body);

        return ListModel.findById(req.params.id, function (err, list) {
            list.name = req.body.name;
            list.members = req.body.members;

            return list.save(function (err) {
                if (!err) {
                    console.log("updated");
                } else {
                    console.log(err);
                }
                return res.json(list);
            });
        });
    });

    // Delete this list
    app.delete('/api/list/:id', function (req, res) {
        return ListModel.findById(req.params.id, function (err, list) {
            return list.remove(function (err) {
                if (!err) {
                    console.log("Removed list: " + req.params.id);
                    return res.json(list);
                }
                else {
                    return console.log(err);
                }
            })
        })
    });

    // Bulk destroy all lists
    app.delete('/api/list', function (req, res) {
        ListModel.remove(function (err) {
            if (!err) {
                console.log("Removed all lists");
                return res.json('');
            } else {
                console.log(err);
            }
        });
    });
};
