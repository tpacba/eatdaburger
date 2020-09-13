var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(burgers, function(res) {
            cb(res);
        });
    },
    insertOne: function(col, vals) {
        orm.insertOne(burgers, col, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(col, colCondition, valCondition) {
        orm.updateOne(burgers, col, colCondition, valCondition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;