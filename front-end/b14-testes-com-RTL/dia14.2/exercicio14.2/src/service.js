const randomNumber = () => Math.floor(Math.random() * 101);

const wordToUppercase = (string) => string.toUpperCase(); 

const onlyFirstLetter = (string) => string[0]; 

const concatenateStrings = (str1, str2) => `${str1}${str2}`;

const getDogPictures = async () => {

  try {
    const response = fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

module.exports = { 
  randomNumber, 
  wordToUppercase, 
  onlyFirstLetter, 
  concatenateStrings,
  getDogPictures,
}; 