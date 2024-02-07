const authService = require("../services/auth.service");
const userService = require("../services/user.service");

async function createUser(req, res) {
  const { first_name, last_name, password, username } = req.body;
  try {
    const user = await userService.createUser(
      first_name,
      last_name,
      password,
      username
    );
    res.status(201).send(user);
  } catch (error) {
    console.error("createUser: ", error);
    res.status(500).send();
  }
}

async function getSelfUser(req, res) {
  const { email } = req.user;
  try {
    const user = await userService.getUserByEmail(email);
    res.status(200).send(user);
  } catch (error) {
    console.error("getSelfUser: ", error);
    res.status(500).send();
  }
}

async function updateSelfUser(req, res) {
  const { email } = req.user;
  const { first_name, last_name, password } = req.body;
  try {
    const user = await userService.updateUser(
      email,
      first_name,
      last_name,
      password
    );
    res.status(200).send(user);
  } catch (error) {
    console.error("updateSelfUser: ", error);
    res.status(500).send();
  }
}

module.exports = {
  createUser,
  getSelfUser,
  updateSelfUser,
};
