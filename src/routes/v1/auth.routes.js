const { Router } = require("express");
const authController = require("../../controllers/auth.controller");

const router = Router();

router.get("/verify", authController.verifyEmail);

module.exports = router;
