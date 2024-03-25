const sequelize = require("../configs/database.js");
const logger = require("../utils/logger.js");

async function checkDatabaseHealth() {
  await sequelize.authenticate();
  logger.info("Database connection has been established successfully.");
}

module.exports = { checkDatabaseHealth };
