const fs = require('fs').promises;

const readChars = async () => {
  const chars = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedChars = JSON.parse(chars); 
  return convertedChars.forEach(({ id, name }) => {
    console.log(`${id} - ${name}`)
  });
}

readChars();