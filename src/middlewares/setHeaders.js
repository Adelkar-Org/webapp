const setCommonHeaders = (req, res, next) => {
  res.set({
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
  });
  next();
};

module.exports = setCommonHeaders;
