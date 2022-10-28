const fs = require('fs').promises;
const readline = require('readline-sync');

// const readChars = async () => {
//   const chars = await fs.readFile('./simpsons.json', 'utf-8');
//   const convertedChars = JSON.parse(chars); 
//   return convertedChars.forEach(({ id, name }) => {
//     console.log(`${id} - ${name}`)
//   });
// }

// const findChar = async (id) => {
//   const chars = await fs.readFile('./simpsons.json', 'utf-8');
//   const promise = new Promise((resolve, reject) => {
//     const convertedChars = JSON.parse(chars); 
//     const foundChar = convertedChars.find((char) => char.id === id);
//     if (foundChar === undefined) reject(new Error('id não encontrado.'));
//     resolve(foundChar);
//   })
//   return promise;
// };

// const main = async () => {
//   const choosenId = readline.question('Type an id, please. \n');
//   let result;
//   try {
//     result = await findChar(choosenId);
//   } catch (error) {
//     return console.log(error.message);
//   }
//   console.log(result);
// };

const filterChars = async () => {
  const chars = await fs.readFile('./simpsons.json', 'utf-8');
  const convertedChars = JSON.parse(chars); 
  const filteredArray = convertedChars.filter((char) => char.id !== '6' && char.id !== '10');
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredArray));
}

const main = async () => {
  await filterChars();
};

main();