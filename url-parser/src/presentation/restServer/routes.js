const urlControllers = require('../controllers');

const bind = (app) => {
    app.get("/urls/schema", urlControllers.getUrlSchema);
    app.post("/urls/schema", urlControllers.setUrlSchema);
    app.post('/urls/parse', urlControllers.parseUrl);
};

module.exports = {
    bind,
};