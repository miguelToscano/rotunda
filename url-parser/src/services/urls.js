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

const getParams = (url) => {
    let splitUrl = url.split("/");
    splitUrl = _.slice(splitUrl, 1, splitUrl.length);
    return splitUrl;
};

const parseParams = (schema, params) => {
    const response = {};

    for (let i = 0; i < schema.length; i++) {
        if (schema[i][0] === ":") {
            response[schema[i].split(":")[1]] = params[i];
        }
    }

    return response;
};

const parseQueryParams = (queryParams) => {
    const response = {};

    if (queryParams) {
        let queryParamsSplit = queryParams.split("&");
        queryParamsSplit.forEach(splitQueryParam => {
            const splitParams = splitQueryParam.split("=");
            response[splitParams[0]] = splitParams[1];
        });
    }

    return response;
};

const getQueryParams = (url) => url.includes("?") ? url.split("?")[1] : null;

const parseUrl = async (url) => {
    try {
        if (!url) {
            throw errors.createError(errors.INVALID_URL);
        }

        const urlSchema = await urlSchemaRepository.getUrlSchema();
        
        if (!urlSchema) {
            throw errors.createError(errors.URL_SCHEMA_NOT_FOUND);
        }

        let splitUrlSchema = urlSchema.split("/");
        splitUrlSchema = _.slice(splitUrlSchema, 1, splitUrlSchema.length);

        let params = getParams(url);
        let queryParams = getQueryParams(url);

        if (queryParams) {
            let lastParam = params[params.length - 1];
            lastParam = lastParam.split("?")[0];
            params[params.length - 1] = lastParam;
        }

        if (splitUrlSchema.length !== params.length) {
            throw errors.createError(errors.INVALID_URL);
        }
        
        return {
            ...parseParams(splitUrlSchema, params),
            ...parseQueryParams(queryParams),
        };
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