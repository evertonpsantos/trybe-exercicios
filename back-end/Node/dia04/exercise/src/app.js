const express = require('express');

const app = express();
app.use(express.json());

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo name é obrigatório.' });
  }
  if (name.length < 5) {
    return res.status(400).json({ message: 'O campo name precisa ter mais de 4 letras.' });
  }
  next();
}

const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (price === undefined) {
    return res.status(400).json({ message: 'O campo price é obrigatório.' });
  }
  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json({ message: `O campo price deve ser um número maior ou igual a zero` });
  }
  next();
}

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'O campo description é obrigatório.' });
  }

  const requiredProperties = ['createdAt', 'rating', 'difficulty'];

  if (!requiredProperties.every((property) => property in description)) {
    return res.status(400).json({ message: 'Os campos createdAt, rating e difficulty são obrigatórios.' });
  }
  next();
};

const validateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;

  const validRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!validRegex.test(createdAt)) {
    return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  } 
  next();
};

const validateRatingField = (req, res, next) => {
  const { rating } = req.body.description;

  if (rating <= 0 || rating >= 6 || typeof rating !== "number") {
    return res.status(400).json({ "message": "Rating deve ser um número entre 1 e 5" });
  }
  next();
};

app.post('/activities', validateName, validatePrice, validateDescription, validateCreatedAt, validateRatingField, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;
