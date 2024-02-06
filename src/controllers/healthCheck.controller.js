const { checkDatabaseHealth } = require("../services/healthCheck.service.js");

async function healthCheck(req, res) {
  // To check for an empty payload
  if (Object.keys(req.body).length > 0 || Object.keys(req.query).length > 0) {
    console.log("healthCheck: request payload not allowed");
    return res.status(400).send();
  }
  console.log("req", req.body, req.query);

  try {
    await checkDatabaseHealth();
    res.status(200).send();
  } catch (error) {
    console.log("healthCheck: database not available");
    res.status(503).send();
  }
}

module.exports = healthCheck;
