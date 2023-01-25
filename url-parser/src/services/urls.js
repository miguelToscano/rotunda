const _ = require('lodash');
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

const parseUrl = async (url) => {
    try {
        const urlSchema = await urlSchemaRepository.getUrlSchema();
        
        if (!urlSchema) {
            throw errors.createError(errors.URL_SCHEMA_NOT_FOUND);
        }

        const response = {};

        let splitUrlSchema = urlSchema.split("/");
        splitUrlSchema = _.slice(splitUrlSchema, 1, splitUrlSchema.length);

        let splitUrl = url.split("/");
        splitUrl = splitUrl.split("?")[0];
        splitUrl = _.slice(splitUrl, 1, splitUrl.length);

        let queryParams = url.split("?")[1];
        console.log(queryParams);

        if (splitUrlSchema.length !== splitUrl.length) {
            throw errors.createError(errors.INVALID_URL);
        }

        for (let i = 0; i < splitUrlSchema.length; i++) {
            if (splitUrlSchema[i][0] === ":") {
                response[splitUrlSchema[i].split(":")[1]] = splitUrl[i];
            }
        }

        console.log(response);
        
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    setUrlSchema,
    getUrlSchema,
    parseUrl,
};