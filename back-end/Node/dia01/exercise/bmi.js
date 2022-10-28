const calculateBMI = (weight, heightInCm) => {
  const newHeight = heightInCm / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
};

const main = () => {
  const bmi = calculateBMI(95, 160);
  console.log(`Your BMI is ${bmi}`);
};

main();