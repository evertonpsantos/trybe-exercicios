const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.get('/', booksController.getAll);

booksRouter.get('/:id', booksController.getById);

module.exports = booksRouter;

