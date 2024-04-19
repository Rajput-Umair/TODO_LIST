const sequelize = require("../bin/dbConnection");
const TODO = require("./definitions/todo");

const models = {
    todo : TODO
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = {db, models};

