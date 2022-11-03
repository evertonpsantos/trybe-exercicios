const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

async function readJson() {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Arquivo não pôde ser lido: ${error}`);
  }
}

app.get('/movies', async (req, res) => {
  const movies = await readJson();
  res.status(200).json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const paramId = req.params.id;
  const movies = await readJson();
  const chosenMovie = movies.find((movie) => movie.id === Number(paramId));
  res.status(200).json(chosenMovie);
});

async function main() {
  await readJson();
}

main();

module.exports = app;