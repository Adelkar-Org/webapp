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

module.exports = {
  userAuth,
};
