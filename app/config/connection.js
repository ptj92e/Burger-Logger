let Sequelize = require("sequelize");

let sequelize = null;

if (JAWSDB_URL) {
    sequelize = new Sequelize(JAWSDB_URL, {
        dialect: "postgres",
        protocol: "postgres",
        port: match[4],
        host: match[3],
        logging: true
    });
} else {
    sequelize = new Sequelize("burgerDB", "ptj92e", "novaPuppy216", {
        host: "localhost",
        port: 3306,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
};






module.exports = sequelize;