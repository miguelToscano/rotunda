const urlServices = require('../../services');

const setUrlSchema = async (req, res, next) => {
    try {
        const newUrlSchema = req.body.url_schema;
        await urlServices.setUrlSchema(newUrlSchema);
        return res.status(201).send({ message: "success" })
    } catch (error) {
        next(error);
    }
};

module.exports = setUrlSchema;