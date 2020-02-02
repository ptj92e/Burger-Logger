let Sequelize = require("sequelize");

let sequelize = require("../config/connection.js");

let Burger = sequelize.define("burger", {
    name: Sequelize.STRING,
    eaten: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;