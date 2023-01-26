const urlServices = require('../../services');

const parseUrl = async (req, res, next) => {
    try {
        const { url } = req.body;
        const parsedUrl = await urlServices.parseUrl(url);
        return res.status(200).send({ ...parsedUrl });
    } catch (error) {
        next(error);
    }
};

module.exports = parseUrl;