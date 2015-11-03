module.exports = function(obj) {
    var str = JSON.stringify(obj);
    return JSON.parse(str);
};
