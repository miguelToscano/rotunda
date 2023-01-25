let urlSchema = null;

const getUrlSchema = async () => urlSchema;

const setUrlSchema = async (newUrlSchema) => {
    urlSchema = newUrlSchema;
};

module.exports = {
    setUrlSchema,
    getUrlSchema,
};