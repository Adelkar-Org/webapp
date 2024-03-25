const { checkDatabaseHealth } = require("../services/healthCheck.service.js");
const logger = require("../utils/logger.js");

async function healthCheck(req, res) {
  // To check for an empty payload
  if (Object.keys(req.body).length > 0 || Object.keys(req.query).length > 0) {
    logger.error({ message: "healthCheck: request payload not allowed" });
    return res.status(400).send();
  }
  logger.debug("req", req.body, req.query);

  try {
    await checkDatabaseHealth();
    logger.info({ message: "healthCheck: database available" });
    res.status(200).send();
  } catch (error) {
    // logger.info("healthCheck: database not available");
    logger.error({
      message: "healthCheck: database not available",
      error,
    });
    res.status(503).send();
  }
}

module.exports = healthCheck;
