// class BaseResponse {
//   message;
//   status;
//   data;
//   constructor(data) {
//     this.message = data?.message || SUCCESS_MESSAGE.SUCCESS;
//     this.status = data?.status || 200;
//     this.data = data?.data || {};
//   }
// }

// Centralized Error Object
class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
