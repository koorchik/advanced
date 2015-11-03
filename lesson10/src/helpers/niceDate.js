var moment = require('moment');

module.exports = function(unixTime) {
    return moment.unix(unixTime).fromNow();
};
