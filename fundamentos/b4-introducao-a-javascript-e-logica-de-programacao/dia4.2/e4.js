let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSum = 0;
let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numbersSum += numbers[i];
  result = numbersSum / numbers.length;
}

if (result > 20) {
  console.log("Valor maior que 20");
} else if (result < 20) {
  console.log("Valor menor que 20");
} else {
   console.log("Erro");
}
