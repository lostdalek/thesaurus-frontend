var menuApi = require('./menu');
var databaseApi = require('./database');

var mocks = {
    '/api/menu': function(req, res) {
        menuApi.apply(null, [req, res]);
    },
    '/api/database': function(req, res) {
        databaseApi.apply(null, [req, res]);
    }
};

module.exports =  mocks;
