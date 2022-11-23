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

const updateBook = async ({ title, author, pageQuantity }, bookId) => {
  const [newBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id: bookId }}
    );
  return newBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  )

  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}