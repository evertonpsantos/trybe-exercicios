const BookService = require('../services/book.services');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  return res.status(200).json(books);
};

const getById = async (req, res) => {
  const bookId = req.params.id;
  const foundBook = await BookService.getById(bookId);
  if (foundBook === undefined) return res.status(404).json({ message: "Book Not Found"});
  return res.status(200).json(foundBook);
};

module.exports = {
  getAll,
  getById,
}