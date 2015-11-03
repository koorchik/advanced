module.exports = {
    formatProperty: function(originalProperty) {
        return {
            title: originalProperty.title,
            price: originalProperty.price,
            currency: originalProperty.price_currency,
            imgURL: originalProperty.img_url
        };
    }
};
