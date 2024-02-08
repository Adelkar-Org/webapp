const authService = require("../services/auth.service");

const authHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const encodedCreds = authorization.split(" ")[1];
  const decodedCreds = Buffer.from(encodedCreds, "base64").toString();
  const [username, password] = decodedCreds.split(":");
  const auth = await authService.userAuth(username, password);
  if (!auth) return res.status(401).json({ message: "Unauthorized" });
  req.user = auth;
  next();
};

module.exports = authHandler;
