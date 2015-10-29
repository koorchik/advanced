 'use strict'

 var Promise = require('bluebird');

var mathUtils = {
    average: function(array) {
        if ( !Array.isArray(array) ) {
            throw new Error('ARGUMENT_IS_NOT_ARRAY');
        }

        var total = 0;

        array.forEach(function(value) {
            if ( +value !== value || value === '' ) {
                throw new Error('ONLY_NUMERIC_VALUES_ARE_SUPPORTED');
            }

            total += value;
        });

        return total/array.length
    },

    averageAsync: function(array) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                try {
                    var result = mathUtils.average(array);
                    resolve(result);
                } catch(error) {
                    reject(error);
                }
            }, 10);
        });
    }
};

module.exports = mathUtils;