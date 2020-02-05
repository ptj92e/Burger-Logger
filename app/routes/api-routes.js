//This is requiring the Burger model 
let db = require("../models");
//This is exporting the routes to be used by the server
module.exports = function(app) {
    //This route populates the handlebars with the current burger information in the mySQL database
    app.get("/", function(req, res) {
        console.log(db.Burger);
        db.Burger.findAll().then(function(data) {
            res.render("burger", { burger: data });
        });
    });
    //This routes creates a new burger and calls the get route again in the index.js
    app.post("/api/burger", function(req, res) {
        db.Burger.create({
            name: req.body.name
        }).then(function(results) {
            res.end();
        });
    });
    //This route changes the eaten property of the burger that was devoured
    app.put("/api/burger/:id", function(req, res) {
        db.Burger.findOne({ where: {id: req.params.id}}).then(function(burger) {
            burger.update({
             eaten: req.body.eaten 
            });
            res.end();
        });
    });
};
