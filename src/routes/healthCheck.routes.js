const { Router } = require("express");
const healthCheck = require("../controllers/healthCheck.controller.js");
const setCommonHeaders = require("../middlewares/setHeaders.js");
const logger = require("../utils/logger.js");

const router = Router();
// set all the headers required for the health check endpoint
router.use(setCommonHeaders);

router.get("/", healthCheck);

// To handle all other unsupported methods on the health check endpoint
router.all("/", (req, res) => {
  logger.error({ message: "Logger test - error" });
  logger.info({ message: "Logger test - info" });
  logger.warn({ message: "Logger test - warn" });
  logger.debug({ message: "Logger test - debug" });
  logger.verbose({ message: "Logger test - verbose" });
  logger.silly({ message: "Logger test - silly" });
  res.status(405).send();
});

module.exports = router;
