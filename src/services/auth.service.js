const EmailTracker = require("../models/emailTracker.model");
const UserModel = require("../models/user.model");

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

async function verifyEmail(email, token) {
  try {
    console.log("email", email, "token", token);
    const tokenData = await EmailTracker.findOne({ where: { email } });
    if (!tokenData) return null;
    if (tokenData.token !== token) return null;
    const user = await UserModel.findOne({
      where: { email },
    });
    if (!user) return null;
    if (user.account_verified == true) return user;
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
