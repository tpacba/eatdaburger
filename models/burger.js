var orm = require("../config/orm.js");

var burger = {
    selectNotDevoured: function(cb) {
        orm.selectAll("burgers", "devoured", false, function(res) {
            cb(res);
        });
    },
    selectDevoured: function(cb) {
        orm.selectAll("burgers", "devoured", true, function(res) {
            cb(res);
        });
    },
    insertOne: function(vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(valCondition, cb) {
        orm.updateOne("burgers", "devoured", true, "id", valCondition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;