const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (bookId) => {
  const foundBook = await Book.findByPk(bookId);
  return foundBook;
};

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
}