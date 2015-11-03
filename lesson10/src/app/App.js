var formattingUtils = require('./formattingUtils');
var propertiesTmpl  = require('../templates/properties-list.hbs');

function App(args) {
    args = args || {};

    if (!args.target) throw new Error('TARGET REQUIRED');
    if (!args.api) throw new Error('API REQUIRED');

    this.target = args.target;
    this.api = args.api;
}

App.prototype = {
    run: function() {
        console.info('start app');
        this.showPropertiesList();
    },

    showPropertiesList: function() {
        var self = this;
        this.api.properties.list().then(function(originalData) {
            var request  = originalData.request;
            var response = originalData.response;

            var data = {
                location: request.location,
                numberOfProperties: response.listings.length,
                searchDate: response.created_unix,
                properties: response.listings.map(formattingUtils.formatProperty)
            };

            var rendered = propertiesTmpl(data);
            self.target.innerHTML = rendered;
        });
    }
};

module.exports = App;
