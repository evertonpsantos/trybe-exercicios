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

app.post('/activities', validateName, validatePrice, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;
