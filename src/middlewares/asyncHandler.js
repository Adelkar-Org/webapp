/**
 * Wraps an asynchronous route handler function with error handling middleware.
 * @param {Function} fn - The asynchronous route handler function.
 * @returns {Function} - The wrapped route handler function.
 * @throws {TypeError} - A type error is thrown if the argument is not a function.
 */

const asyncHandler = (fn) => {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function as the argument to asyncHandler");
  }

  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;
