const authService = require("../services/auth.service");
const logger = require("../utils/logger");

async function verifyEmail(req, res) {
  const { email, token } = req.query;
  try {
    const user = await authService.verifyEmail(email, token);
    if (!user) return res.status(400).json({ message: "Invalid Request" });
    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    logger.error({ message: "verifyEmail: ", error });
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  verifyEmail,
};
