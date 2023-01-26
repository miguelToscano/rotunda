const _ = require("lodash");
const urlSchemaRepository = require("../infrastructure/urlSchemaMemoryDatabase");
const errors = require("./errors");
const constants = require("./constants")

const parseValue = (stringValue) => isNaN(stringValue) ? stringValue : parseInt(stringValue);

const getParams = (url) => {
    let splitUrl = url.split(constants.PARAM_SPLIT);
    splitUrl = _.slice(splitUrl, 1, splitUrl.length);
    return splitUrl;
};

const parseParams = (schema, params) => {
    const response = {};

    for (let i = 0; i < schema.length; i++) {
        if (schema[i][0] === constants.PARAM_PREFIX) {
            response[schema[i].split(constants.PARAM_PREFIX)[1]] = parseValue(params[i]);
        }
    }

    return response;
};

const parseQueryParams = (queryParams) => {
    const response = {};

    if (queryParams) {
        let queryParamsSplit = queryParams.split(constants.QUERY_PARAM_DELIMITER);
        queryParamsSplit.forEach(splitQueryParam => {
            const splitParams = splitQueryParam.split(constants.QUERY_PARAM_SPLIT);
            response[splitParams[0]] = parseValue(splitParams[1]);
        });
    }

    return response;
};

const getQueryParams = (url) => url.includes(constants.QUERY_PARAM_PREFIX) ? url.split(constants.QUERY_PARAM_PREFIX)[1] : null;

const parseUrl = async (url) => {
    try {
        if (!url) {
            throw errors.createError(errors.INVALID_URL);
        }

        const urlSchema = await urlSchemaRepository.getUrlSchema();
        
        if (!urlSchema) {
            throw errors.createError(errors.URL_SCHEMA_NOT_FOUND);
        }

        let splitUrlSchema = urlSchema.split(constants.PARAM_SPLIT);
        splitUrlSchema = _.slice(splitUrlSchema, 1, splitUrlSchema.length);

        let params = getParams(url);
        let queryParams = getQueryParams(url);

        if (queryParams) {
            let lastParam = params[params.length - 1];
            lastParam = lastParam.split(constants.QUERY_PARAM_PREFIX)[0];
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

module.exports = parseUrl;