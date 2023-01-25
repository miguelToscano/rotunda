const urlServices = require('../../services/urls.js');

const setUrl = async (req, res, next) => {
    try {
        console.log(req);
        console.log(req.body);
        const newUrl = req.body.url;
        await urlServices.setUrl(newUrl);
        return res.status(201).send({ message: "success" })
    } catch (error) {
        next(error);
    }
};

const getUrl = async (req, res, next) => {
    try {
        const url = await urlServices.getUrl();
        return res.status(200).send({ url });
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
    setUrl,
    getUrl,
    parseUrl
};