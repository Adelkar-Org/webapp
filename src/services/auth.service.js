const EmailTracker = require("../models/emailTracker.model");
const { config } = require("../configs");
const UserModel = require("../models/user.model");
const { is } = require("@babel/types");

async function userAuth(email, password) {
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      return null;
    }
    if (await user.comparePassword(password)) {
      return user;
    }
    return null;
  } catch (error) {
    logger.error({ message: "userAuth Error", error });
    return null;
  }
}

async function verifyEmail(id, token) {
  try {
    // console.log("id", id, "token", token);
    const tokenData = await EmailTracker.findOne({ where: { token } });
    if (!tokenData) return null;
    if (
      tokenData.token !== token ||
      Date.now() - tokenData.createdAt.getTime() >
        config.email_verification.expiry
    ) {
      return null;
    }
    const user = await UserModel.findOne({
      where: { id },
    });
    if (!user) return null;
    if (user.account_verified == true) return { isVerified: true };
    user.account_verified = true;
    await user.save();
    return user;
  } catch (error) {
    logger.error({ message: "verifyEmail Error", error });
    return null;
  }
}

module.exports = {
  userAuth,
  verifyEmail,
};
