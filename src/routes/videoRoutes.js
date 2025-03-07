const { Router } = require('express');
const VideoController = require('../controllers/videoController.js');

const videoController = new VideoController();

const router = Router();

router
    .get('/videos', (req, res) => videoController.pegaVideos(req, res))
    .get('/videos/:id', (req, res) => videoController.pegaUmVideo(req, res))
    .post('/videos/criar', (req, res) => videoController.criaVideo(req, res))
    .put('/videos/:id/atualizar', (req, res) => videoController.atualizaVideo(req, res))
    .delete('/videos/:id/deletar', (req, res) => videoController.deletaVideo(req, res))

module.exports = router;