const urlsControllers = require('../controllers/urls');

const bind = (app) => {
    app.get("/url", urlsControllers.getUrl);
    app.post("/url", urlsControllers.setUrl);
    app.get('/*', urlsControllers.parseUrl);
};

module.exports = {
    bind,
};