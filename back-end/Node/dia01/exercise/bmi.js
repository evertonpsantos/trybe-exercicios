const readline = require('readline-sync');

const calculateBMI = (weight, heightInCm) => {
  const newHeight = heightInCm / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
};

const main = () => {
  const weight = readline.question("What's your weight (in kg)? \n")
  const height = readline.question("What's your height (in cm)? \n")
  const bmi = calculateBMI(weight, height);
  console.log(`Your BMI is ${bmi}`);
};

main();