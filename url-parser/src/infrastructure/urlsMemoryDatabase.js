let url = null;

const getUrl = async () => url;

const setUrl = async (newUrl) => {
    url = newUrl;
};

module.exports = {
    setUrl,
    getUrl,
};