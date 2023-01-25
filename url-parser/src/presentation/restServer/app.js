const express = require('express');
const bodyParser = require('body-parser')
const { bind } = require('./routes');
const errorHandler = require('../middleware/errorHandler');

const app = express();
app.use(bodyParser.json());
bind(app);
app.use(errorHandler);

module.exports = app;