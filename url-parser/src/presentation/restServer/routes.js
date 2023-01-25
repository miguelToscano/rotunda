const urlsControllers = require('../controllers/urls');

const bind = (app) => {
    app.get("/url_schema", urlsControllers.getUrlSchema);
    app.post("/url_schema", urlsControllers.setUrlSchema);
    app.post('/*', urlsControllers.parseUrl);
};

module.exports = {
    bind,
};