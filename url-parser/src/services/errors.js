const URL_NOT_FOUND = "URL_NOT_FOUND";
const INVALID_URL = "INVALID_URL";
const INTERNAL_ERROR = "INTERNAL_ERROR";

const createError = (errorType) => new Error(errorType);

module.exports = {
    createError,
    URL_NOT_FOUND,
    INVALID_URL,
    INTERNAL_ERROR,
};