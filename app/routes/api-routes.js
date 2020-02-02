let express = require("express");
let router = express.Router();
let Burger = require("../models/burger.js");

router.get("/", function(req, res) {
    Burger.findAll().then(function(data) {
        console.log(data);
        res.render("burger", { burgers: data });
    });
});

module.exports = router;