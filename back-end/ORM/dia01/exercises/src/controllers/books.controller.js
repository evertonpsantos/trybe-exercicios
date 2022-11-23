const BookService = require('../services/book.services');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  return res.status(200).json(books);
};


module.exports = {
  getAll,
}