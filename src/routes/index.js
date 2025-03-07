const express = require('express');
const videos = require('./videoRoutes.js')

module.exports = app => {
    app.use(
        express.json(),
        videos
    )
}