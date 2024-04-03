const authService = require("../services/auth.service");
const logger = require("../utils/logger");

async function verifyEmail(req, res) {
  try {
    const { id, token } = req.query;
    if (!id || !token)
      return res.status(400).json({ message: "Invalid Request" });
    const user = await authService.verifyEmail(id, token);
    if (!user) return res.status(400).json({ message: "Invalid Request" });
    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    logger.error({ message: "verifyEmail: ", error });
    if (error.message === "Invalid Token")
      return res.status(400).json({ message: "Invalid Token" });
    if (error.message === "Token Expired")
      return res.status(400).json({ message: "Token Expired" });
    if (error.message === "Invalid Request")
      return res.status(400).json({ message: "Invalid Request" });
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  verifyEmail,
};
