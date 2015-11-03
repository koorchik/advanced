require('./assets');

var $   = require('jquery');
var App = require('./app/App');
var api = require('./api');

$(document).ready(function() {
    new App({
        api: api,
        target: document.getElementById('content')
    }).run();
});
