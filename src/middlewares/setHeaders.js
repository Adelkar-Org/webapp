/**
 * Middleware to set common HTTP headers for security and caching.
 * This helps enhance security and ensure content is not cached by browsers or proxies.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function in the stack.
 */
const setCommonHeaders = (req, res, next) => {
  res.set({
    // Prevent MIME type sniffing
    "X-Content-Type-Options": "nosniff",

    // Disable caching to ensure sensitive data is not stored in browser or proxy caches
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });
  next();
};

module.exports = setCommonHeaders;
