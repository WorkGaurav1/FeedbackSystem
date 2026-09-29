/**
 * 404 - Route Not Found
 */
function notFound(req, res, next) {

  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });

}

/**
 * Global Error Handler
 */
function errorHandler(error, req, res, next) {

  console.error(error);

  const statusCode =
    res.statusCode !== 200
      ? res.statusCode
      : 500;

  return res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
    stack:
      process.env.NODE_ENV === "production"
        ? undefined
        : error.stack,
  });

}

export {
  notFound,
  errorHandler,
};