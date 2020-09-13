var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    var hbsObject = {}

    burger.selectNotDevoured(function(result) {
        hbsObject.burgersNotDevoured = result;
        console.log("devoured: false" + JSON.stringify(hbsObject.burgersNotDevoured));

        burger.selectDevoured(function(data) {
            hbsObject.burgersDevoured = data;

            console.log("devoured: true" + JSON.stringify(hbsObject.burgersDevoured));
            console.log(hbsObject);
            res.render("index", hbsObject);
        })
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({id:result.insertId})
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;