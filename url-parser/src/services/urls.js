const _ = require('lodash');
const urlsRepository = require('../infrastructure/urlsMemoryDatabase');
const errors = require('./errors');

const setUrl = async (url) => {
    try {
        await urlsRepository.setUrl(url);
        return url;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getUrl = async () => {
    try {
        const url = await urlsRepository.getUrl();

        if (!url) {
            throw errors.createError(errors.URL_NOT_FOUND);
        }

        return url;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const parseUrl = async (url) => {
    try {
        const response = {};
    
        let splitUrl = url.split('/');
        splitUrl = _.slice(splitUrl, 1, splitUrl.length);
        
        const keyValueChunks = _.chunk(splitUrl, 2);
    
        keyValueChunks.forEach(keyValueChunk => {
            if (keyValueChunk.length !== 2) {
                throw errors.createError(errors.types.INVALID_URL);
            }

            response[keyValueChunk[0]] = keyValueChunk.length == 2 ? keyValueChunk[1] : null;
        });
        
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    setUrl,
    getUrl,
    parseUrl,
};