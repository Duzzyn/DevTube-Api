const video = require('../models');

class VideoController {
    async pegaVideos(req, res) {
        try {
            const buscaVideos = await video.Video.findAll();
            return res.status(200).json(buscaVideos);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async pegaUmVideo(req, res) {
        const { id } = req.params;
        try {
            const buscaUmVideo = await video.Video.findByPk(id);
            return res.status(200).json(buscaUmVideo);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async criaVideo(req, res) {
        const dados = req.body;
        try {
            const criaVideoRegistro = await video.Video.create(dados)
            return res.status(200).json(criaVideoRegistro)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }

    async atualizaVideo(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const atualizaDados = await video.Video.update(dadosAtualizados, { where: { id } })
            return res.status(200).json(atualizaDados)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }

    async deletaVideo(req, res) {
        const { id } = req.params;
        try {
            await video.Video.destroy({ where: { id } })
            return res.status(200).json({ mensagem: `Id ${id} Deletado com Sucesso` })
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }
}

module.exports = VideoController;