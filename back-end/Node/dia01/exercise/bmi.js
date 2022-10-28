const readline = require('readline-sync');

const calculateBMI = (weight, heightInCm) => {
  const newHeight = heightInCm / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
};

const main = () => {
  const weight = readline.questionFloat("What's your weight (in kg)? \n")
  const height = readline.questionInt("What's your height (in cm)? \n")
  const bmi = calculateBMI(weight, height);
  console.log(`Your BMI is ${bmi}`);
};

main();

//Adiciona questionFloat