const sequelize = require("../configs/database");
const { Sequelize, DataTypes } = require("sequelize");

const EmailTracker = sequelize.define("emailTracker", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  token: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = EmailTracker;
