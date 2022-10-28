const readline = require('readline-sync');

const calculateBMI = (weight, heightInCm) => {
  const newHeight = heightInCm / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
};

const main = () => {
  const weight = readline.questionFloat("What's your weight (in kg)? \n")
  const height = readline.questionInt("What's your height (in cm)? \n")
  const bmi = calculateBMI(weight, height);
  if (bmi < 18.5) console.log(`You're really thin. Your BMI is ${bmi}`);
  if (bmi >= 18.5 && bmi <= 24.9) console.log(`You have a normal weight. Your BMI is ${bmi}`);
  if (bmi >= 25 && bmi <= 29.9) console.log(`You're overweight. Your BMI is ${bmi}`);
  if (bmi >= 30 && bmi <= 34.9) console.log(`You're obese level I. Your BMI is ${bmi}`);
  if (bmi >= 35 && bmi <= 39.9) console.log(`You're obese level II. Your BMI is ${bmi}`);
  if (bmi >= 40) console.log(`You're obese level III. Your BMI is ${bmi}`);
};

main();