const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

const moviesPath = path.resolve(__dirname, './movies.json');

async function readJson () {
  try {
    const movies = await fs.readFile(moviesPath);
    const convertedMovies = JSON.parse(movies);
    return convertedMovies;
  } catch (error) {
    return console.error('Erro na leitura do arquivo', error);
  }
};

async function main () {
  await readJson();
}

main();

module.exports = app;