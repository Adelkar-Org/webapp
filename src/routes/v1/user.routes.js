const { Router } = require("express");
const userController = require("../../controllers/user.controller");
const authHandler = require("../../middlewares/authHandler");

const router = Router();

router.post("/", userController.createUser);

router.get("/self", authHandler, userController.getSelfUser);

router.put("/self", authHandler, userController.updateSelfUser);

module.exports = router;
