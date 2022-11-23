const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (bookId) => {
  const foundBook = await Book.findByPk(id);
  return foundBook;
};

module.exports = {
  getAll,
  getById,
}