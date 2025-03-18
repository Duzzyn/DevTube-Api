const express = require('express');
const videos = require('./videoRoutes.js')
const categorias = require('./categoriaRoutes.js')

module.exports = app => {
    app.use(
        express.json(),
        videos,
        categorias
    )
}