// apiScript.js
const coinContainer = document.querySelector('#coinContainer');

const API_URL = 'https://api.coincap.io/v2/assets';

const getCoin = async () => {
  const response = await fetch(API_URL);
  const result = await response.json();
  const aux = result.data.filter((_, index) => index <= 9);
  aux.forEach(({ name, symbol, priceUsd }) => {
    const coinSpace = document.createElement('li');
    coinSpace.innerHTML = `${name} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}`;
    coinContainer.appendChild(coinSpace);
  });
};

getCoin();