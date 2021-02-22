const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/Database");

const Review = db.define("Review", {
  id: {
    type: DataTypes.STRING,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: { type: DataTypes.STRING, allowNull: false },
  Review: { type: DataTypes.STRING, allowNull: false },
  Rating: { type: DataTypes.ENUM([0, 1, 2, 3, 4, 5]), defaultValue: 0 },
  Picture: {
    type: DataTypes.STRING,
  },
});

module.exports = Review;
