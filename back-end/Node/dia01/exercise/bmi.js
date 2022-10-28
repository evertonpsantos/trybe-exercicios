const calculateBMI = (weight, heightInCm) => {
  const newHeight = heightInCm / 100;
  return (weight / (newHeight * newHeight)).toFixed(2);
};