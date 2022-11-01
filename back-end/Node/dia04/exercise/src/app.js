const express = require('express');

const app = express();
app.use(express.json());

const validateName = (req, res, next) => {
  if (!('name' in req.body)) {
    return res.status(400).json({ message: 'O campo name é obrigatório.' });
  }
  if (req.body.name.length < 5) {
    return res.status(400).json({ message: 'O campo name precisa ter mais de 4 letras.' });
  }
  next();
}

app.post('/activities', validateName, (req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;
