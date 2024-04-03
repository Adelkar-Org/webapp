const { config } = require("../configs");
const EmailTracker = require("../models/emailTracker.model");
const UserModel = require("../models/user.model");
const logger = require("../utils/logger");

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
  const tokenData = await EmailTracker.findOne({ where: { token } });
  if (!tokenData) throw new Error("Invalid Token");
  if (
    Date.now() - tokenData.createdAt.getTime() >
    config.email_verification.expiry
  )
    throw new Error("Token Expired");
  if (tokenData.token !== token) throw new Error("Invalid Token");
  const user = await UserModel.findOne({
    where: { id },
  });
  if (!user) throw new Error("Invalid Request");
  if (user.account_verified == true) throw new Error("User already verified");
  user.account_verified = true;
  // await user.save();
  return user;
}

module.exports = {
  userAuth,
  verifyEmail,
};
