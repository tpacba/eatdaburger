var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    insertOne: function(table, col, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (??)";
        connection.query(queryString, [table, col, vals], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    },
    updateOne: function(table, col, colCondition, valCondition, cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString, [table, col, colCondition, valCondition], function(err, data) {
            if (err) throw err;
            cb(data);
        })
    }
}

module.exports = orm;