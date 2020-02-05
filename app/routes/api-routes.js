let db = require("../models");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        console.log(db.Burger);
        db.Burger.findAll().then(function(data) {
            res.render("burger", { burger: data });
        });
    });

    app.post("/api/burger", function(req, res) {

        db.Burger.create({
            name: req.body.name
        }).then(function(results) {
            res.end();
        });
    });

    app.put("/api/burger/:id", function(req, res) {
        db.Burger.findOne({ where: {id: req.params.id}}).then(function(burger) {
            burger.update({
             eaten: req.body.eaten 
            });
            res.end();
        });
    });
};
