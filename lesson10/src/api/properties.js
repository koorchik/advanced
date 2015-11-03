var Promise = require('bluebird');
var _       = require('lodash');

var FIXTURE = require('../data/sample.json');

module.exports = {
    list: function() {
        return Promise.resolve( _.cloneDeep(FIXTURE) );
    }
};
