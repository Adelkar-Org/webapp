const sequelize = require("../configs/database.js");

async function checkDatabaseHealth() {
  await sequelize.authenticate();
  console.log("Database connection has been established successfully.");
}

module.exports = { checkDatabaseHealth };
