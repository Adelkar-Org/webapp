const { Router } = require("express");
const userController = require("../../controllers/user.controller");
const authHandler = require("../../middlewares/authHandler");

const router = Router();

router.post("/", userController.createUser);

router
  .route("/self")
  .get(authHandler, userController.getSelfUser)
  .put(authHandler, userController.updateSelfUser);

module.exports = router;
