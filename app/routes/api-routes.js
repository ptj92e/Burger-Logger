let Burger = require("../models/burger.js");

module.exports = function(app) {

    app.get("/", function(req, res) {
        Burger.findAll().then(function(data) {
            console.log(data);
            res.render("burger", { burgers: data });
        });
    });

    app.post("/api/burger", function(req, res) {
        console.log(req.body);

        Burger.create({
            name: req.body.name
        }).then(function(results) {
            res.end();
        });
    });
};
