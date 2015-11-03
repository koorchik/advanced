var Promise   = require('bluebird');
var cloneDeep = require('./cloneDeep');

var FIXTURE = require('../data/sample.json');

module.exports = {
    list: function() {
        return Promise.resolve( cloneDeep(FIXTURE) );
    }
};
