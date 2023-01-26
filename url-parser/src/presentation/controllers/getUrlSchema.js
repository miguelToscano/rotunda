const urlServices = require('../../services');

const getUrlSchema = async (req, res, next) => {
    try {
        const urlSchema = await urlServices.getUrlSchema();
        return res.status(200).send({ url_schema: urlSchema });
    } catch (error) {
        next(error);
    }
};

module.exports = getUrlSchema;