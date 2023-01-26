const urlSchemaRepository = require('../infrastructure/urlSchemaMemoryDatabase');
const errors = require('./errors');

const validateUrlSchema = (url) => {
    try {
        if (url.length === 0 || url[0] !== "/") {
            throw errors.createError(errors.INVALID_URL_SCHEMA);
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const setUrlSchema = async (urlSchema) => {
    try {
        validateUrlSchema(urlSchema);
        await urlSchemaRepository.setUrlSchema(urlSchema);
        return urlSchema;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = setUrlSchema;