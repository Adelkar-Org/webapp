const userService = require("../services/user.service");
const logger = require("../utils/logger");

async function createUser(req, res) {
  const { first_name, last_name, password, username } = req.body;
  try {
    if (!first_name || typeof first_name !== "string")
      return res.status(400).json({ message: "Invalid first name" });
    if (!last_name || typeof last_name !== "string")
      return res.status(400).json({ message: "Invalid last name" });
    if (!password || typeof password !== "string" || password.length < 8)
      return res.status(400).json({ message: "Invalid password" });
    if (
      !username ||
      typeof username !== "string" ||
      !/^[a-zA-Z0-9@.]+$/.test(username)
    )
      return res
        .status(400)
        .json({ message: "Invalid username. Enter proper email id" });

    // check if user already exists
    const userExists = await userService.getUserByEmail(username);
    if (userExists) {
      // logger.error({ message: "User already exists" });
      logger.debug({ message: "User already exists", userExists });
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await userService.createUser(
      first_name,
      last_name,
      password,
      username
    );
    if (!user)
      return res.status(400).json({ message: "Invalid Request", user });
    res.status(201).json(user);
  } catch (error) {
    logger.error({ message: "createUser Error", error });
    res.status(500).json({ message: "Internal server error" });
  }
}

async function getSelfUser(req, res) {
  const { email } = req.user;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) return res.status(400).json({ message: "Invalid Request" });
    res.status(200).json(user);
  } catch (error) {
    logger.error({ message: "getSelfUser: ", error });
    res.status(500).json({ message: "Internal server error" });
  }
}

async function updateSelfUser(req, res) {
  const { email } = req.user;
  const { first_name, last_name, password } = req.body;
  try {
    if (!first_name && !last_name && !password)
      return res.status(400).json({ message: "Bad Request" });
    const user = await userService.updateUser(
      email,
      first_name,
      last_name,
      password
    );
    if (!user) return res.status(400).json({ message: "Invalid Request" });
    res.status(204).json();
  } catch (error) {
    logger.error({ message: "updateSelfUser: ", error });
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  createUser,
  getSelfUser,
  updateSelfUser,
};
