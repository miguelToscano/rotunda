const urlServices = require('../../services/urls.js');

const setUrlSchema = async (req, res, next) => {
    try {
        console.log(req);
        console.log(req.body);
        const newUrlSchema = req.body.url_schema;
        await urlServices.setUrlSchema(newUrlSchema);
        return res.status(201).send({ message: "success" })
    } catch (error) {
        next(error);
    }
};

const getUrlSchema = async (req, res, next) => {
    try {
        const urlSchema = await urlServices.getUrlSchema();
        return res.status(200).send({ url_schema: urlSchema });
    } catch (error) {
        next(error);
    }
};

const parseUrl = async (req, res, next) => {
    try {
        const parsedUrl = await urlServices.parseUrl(req.originalUrl);
        return res.status(200).send({ ...parsedUrl });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    setUrlSchema,
    getUrlSchema,
    parseUrl,
};