const categoria = require('../models')

class CategoriaController {
    async pegaCategorias(req, res) {
        try {
            const buscaCategorias = await categoria.Categoria.findAll();
            return res.status(200).json(buscaCategorias);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async pegaUmaCategoria(req, res) {
        const { id } = req.params;
        try {
            const buscaUmaCategoria = await categoria.Categoria.findByPk(id);
            return res.status(200).json(buscaUmaCategoria);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async criaCategoria(req, res) {
        const dados = req.body;
        try {
            const criaCategoriaRegistro = await categoria.Categoria.create(dados)
            return res.status(201).json(criaCategoriaRegistro)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }

    async atualizaCategoria(req, res) {
        const { id } = req.params;
        const dadosAtualizados = req.body;
        try {
            const atualizaCategoria = await categoria.Categoria.update(dadosAtualizados, { where: { id } })
            return res.status(200).json(atualizaCategoria)
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }

    async deletaCategoria(req, res) {
        const { id } = req.params;
        try {
            await categoria.Categoria.destroy({ where: { id } })
            return res.status(200).json({ mensagem: `Id ${id} Deletado com Sucesso` })
        } catch (erro) {
            return res.status(500).json({ erro: erro.message })
        }
    }
}

module.exports = CategoriaController;