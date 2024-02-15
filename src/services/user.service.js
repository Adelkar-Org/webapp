const UserModel = require("../models/user.model");

async function createUser(first_name, last_name, password, username) {
  try {
    const user = await UserModel.create({
      first_name,
      last_name,
      password,
      email: username,
    });
    const userJSON = user.toJSON();
    delete userJSON.password;
    return userJSON;
  } catch (error) {
    console.error("createUser: ", error);
    return null;
  }
}

async function getUserByEmail(email) {
  try {
    const user = await UserModel.findOne({
      where: { email },
      attributes: { exclude: ["password"] },
    });
    return user;
  } catch (error) {
    console.error("getUserByEmail: ", error);
    return null;
  }
}

async function updateUser(email, first_name, last_name, password) {
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (user) {
      user.first_name = first_name ?? user.first_name;
      user.last_name = last_name ?? user.last_name;
      user.password = password ?? user.password;
      await user.save();
      const userJSON = user.toJSON();
      delete userJSON.password;
      return userJSON;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("updateUser: ", error);
    return null;
  }
}

async function deleteUser(email) {
  try {
    const user = await UserModel.findOne({ where: { email } });
    if (user) {
      await user.destroy();
      return true;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("deleteUser: ", error);
    return false;
  }
}

module.exports = {
  createUser,
  getUserByEmail,
  updateUser,
};
