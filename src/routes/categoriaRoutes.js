const { Router } = require('express');
const CategoriaController = require('../controllers/categoriaController.js')

const categoriaController = new CategoriaController();

const router = Router();

router
    .get('/categorias', (req, res) => categoriaController.pegaCategorias(req, res))
    .get('/categorias/:id', (req, res) => categoriaController.pegaUmaCategoria(req, res))
    .post('/categorias/criar', (req, res) => categoriaController.criaCategoria(req, res))
    .put('/categorias/:id/atualizar', (req, res) => categoriaController.atualizaCategoria(req, res))
    .delete('/categorias/:id', (req, res) => categoriaController.deletaCategoria(req, res))

