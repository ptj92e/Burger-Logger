module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("burger", {
        name: DataTypes.STRING,
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    return Burger;
};