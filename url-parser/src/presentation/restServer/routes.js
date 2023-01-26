const urlsControllers = require('../controllers/urls');

const bind = (app) => {
    app.get("/urls/schema", urlsControllers.getUrlSchema);
    app.post("/urls/schema", urlsControllers.setUrlSchema);
    app.post('/urls/parse', urlsControllers.parseUrl);
};

module.exports = {
    bind,
};