const sequelize = require("sequelize");

const db = new sequelize("travlingdb", "root", "", {
  dialect: "mysql",
  logging: false,
});

module.exports = db;
