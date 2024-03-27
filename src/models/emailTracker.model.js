const sequelize = require("../configs/database");
const { DataTypes } = require("sequelize");

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
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
  status: {
    type: DataTypes.INTEGER,
  },
  messageData: {
    type: DataTypes.STRING,
  },
});

module.exports = EmailTracker;
