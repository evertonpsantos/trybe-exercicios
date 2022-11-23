const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.get('/', booksController.getAll);

booksRouter.get('/:id', booksController.getById);

booksRouter.post('/', booksController.createBook);

booksRouter.put('/:id', booksController.updateBook);

booksRouter.delete('/:id', booksController.deleteBook);


module.exports = booksRouter;

