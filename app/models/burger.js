let Sequelize = require("sequelize");

let sequelize = require("../config/connection.js");

let Burger = sequelize.define("burger", {
    name: Sequelize.STRING,
    eaten: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    }
});

Burger.sync();

module.exports = Burger;