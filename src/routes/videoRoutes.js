const { Router } = require('express');
const VideoController = require('../controllers/videoController.js');

const videoController = new VideoController();

const router = Router();

router
    .get('/videos', (req, res) => videoController.pegaVideos(req, res))
    .get('/videos/search', (req, res) => videoController.pegaVideosPorTitulo(req, res))
    .get('/videos/:id', (req, res) => videoController.pegaUmVideo(req, res))
    .post('/videos', (req, res) => videoController.criaVideo(req, res))
    .put('/videos/:id', (req, res) => videoController.atualizaVideo(req, res))
    .delete('/videos/:id', (req, res) => videoController.deletaVideo(req, res))
    .get('/categorias/:categoriaId/videos', (req, res) => videoController.pegaVideosPorCategoria(req, res))

module.exports = router;