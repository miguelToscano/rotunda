const errors = require('../../services/errors');

const errorStatusCode = {
    [errors.INTERNAL_ERROR]: 500,
    [errors.URL_SCHEMA_NOT_FOUND]: 404,
    [errors.INVALID_URL_SCHEMA]: 400,
    [errors.INVALID_URL]: 400,
}

const errorHandler = ((err, _req, res, _next) => {
    const error = {
      status: errorStatusCode[err.message] || 500,
      message: err.message || 'Internal Server Error',
    };
  
    res.status(error.status).json({ message: error.message });
  });
  
  module.exports = errorHandler;