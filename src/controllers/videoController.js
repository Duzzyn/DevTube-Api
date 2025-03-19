const { Op } = require('sequelize')
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
        const { titulo, descricao, url, categoriaId } = req.body;
        try {
            const dados = {
                titulo,
                descricao,
                url,
                categoriaId: categoriaId || 16,
            }
            const criaVideoRegistro = await video.Video.create(dados)
            return res.status(201).json(criaVideoRegistro)
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

    async pegaVideosPorCategoria(req, res) {
        const { categoriaId } = req.params;
        try {
            const buscaVideoCategoria = await video.Video.findAll({ where: { categoriaId } })
            return res.status(200).json(buscaVideoCategoria)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }

    async pegaVideosPorTitulo(req, res) {
        const { titulo } = req.query;
        try {
            const buscaVideoTitulo = await video.Video.findAll({
                where:
                {
                    titulo: { [Op.like]: `%${titulo}%` }
                }
            })
            return res.status(200).json(buscaVideoTitulo)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }
}

module.exports = VideoController;