mongoose = require('mongoose');

var Schema = mongoose.Schema;

var List = new Schema ({name: String, members: [String]});

var ListModel = mongoose.model('List', List);

module.exports = ListModel;


