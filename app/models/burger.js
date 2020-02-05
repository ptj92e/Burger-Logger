//This model is being exported to be used for creating new rows in the appropriate database
module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't have a text value
            allowNull: false,
            validate: {
                // len is a validation that checks that our burger is between 1 and 100 characters
                len: [1, 100],
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    });
    //This returns the new burger row to be used by the api-routes
    return Burger;
};