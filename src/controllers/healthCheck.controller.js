const { checkDatabaseHealth } = require("../services/healthCheck.service.js");
const logger = require("../utils/logger.js");

async function healthCheck(req, res) {
  // To check for an empty payload
  logger.debug("req", req.body, req.query);
  if (Object.keys(req.body).length > 0 || Object.keys(req.query).length > 0) {
    logger.error("healthCheck: request payload not allowed");
    return res.status(400).send();
  }
  try {
    await checkDatabaseHealth();
    logger.info("healthCheck: database available");
    res.status(200).send();
  } catch (error) {
    logger.error("healthCheck: database not available", JSON.stringify(error));
    res.status(503).send();
  }
}

module.exports = healthCheck;
