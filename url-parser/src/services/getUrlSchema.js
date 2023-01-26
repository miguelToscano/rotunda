const urlSchemaRepository = require('../infrastructure/urlSchemaMemoryDatabase');
const errors = require('./errors');

const getUrlSchema = async () => {
    try {
        const url = await urlSchemaRepository.getUrlSchema();

        if (!url) {
            throw errors.createError(errors.URL_SCHEMA_NOT_FOUND);
        }

        return url;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = getUrlSchema;