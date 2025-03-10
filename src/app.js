const express = require('express');
const routes = require('./routes')

const app = express();
routes(app);

app.get('/', (req, res) => {
    res.send('Welcome to DevTube API!')
})

module.exports = app;