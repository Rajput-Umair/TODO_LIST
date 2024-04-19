const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class TODO extends Model {}

TODO.init({
    id : {
        primaryKey : true,
        allowNull :false,
        type : DataTypes.STRING()
    },
    title : {
        allowNull : false,
        type : DataTypes.STRING()
    },
    description: {
        allowNull : true,
        type : DataTypes.STRING(200)
    },
    status : {
        allowNull : false,
        type : DataTypes.STRING()
    }
}, {
    sequelize,
    timestamps : true,
    name : "TODO"
})

module.exports = TODO;