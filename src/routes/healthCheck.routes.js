const { Router } = require("express");
const healthCheck = require("../controllers/healthCheck.controller.js");
const setCommonHeaders = require("../middlewares/setHeaders.js");

const router = Router();
// set all the headers required for the health check endpoint
router.use(setCommonHeaders);

router.get("/", healthCheck);

// To handle all other unsupported methods on the health check endpoint
router.all("/", (req, res) => {
  res.status(405).send();
});

module.exports = router;
