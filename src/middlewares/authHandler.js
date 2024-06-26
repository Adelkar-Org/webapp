const { config } = require("../configs");
const authService = require("../services/auth.service");
const logger = require("../utils/logger");
const {
  unauthorizedResponse,
  forbiddenResponse,
} = require("../utils/setResponses");

/**
 * Middleware function for handling authentication.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful or rejects with an error.
 */
const authHandler = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return unauthorizedResponse(res);

    const [type, encodedCreds] = authorization.split(" ");
    if (type.toLowerCase() !== "basic" || !encodedCreds) {
      return unauthorizedResponse(res);
    }

    const decodedCreds = Buffer.from(encodedCreds, "base64").toString();
    const [username, password] = decodedCreds.split(":");
    if (!username || !password) return unauthorizedResponse(res);

    const auth = await authService.userAuth(username, password);
    if (!auth) return unauthorizedResponse(res);
    if (!config.ci.isGitHubActions) {
      if (!auth.account_verified) {
        return forbiddenResponse(res);
      }
    }
    req.user = auth;
    next();
  } catch (error) {
    logger.error({ mesage: "Authentication error:", error });
    return unauthorizedResponse(res);
  }
};

module.exports = authHandler;
