const { Router } = require("express");
const userRouter = require("./user.routes");
const authRouter = require("./auth.routes");

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;
