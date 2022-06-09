// Parte 1
// Exercício 1 

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} otimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// Exercício 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = (array) => {
//   const sorted = array.sort((a, b) => a - b);
//   return sorted;
// }

// const sortedArray = sortArray(oddsAndEvens);
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); 

// Parte 2
// Exercício 1

// const factorial = (n) => {
//   let aux = n;
//   let aux2 = n - 1;
//   for (let i = aux2; i >= 2; i -= 1) {
//     aux *= i;
//   }
//   return aux;
// }

// console.log(factorial(n));

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
// console.log(factorial(5))

// Exercício 2

// const longestWord = (frase) => {
//   let fraseQuebrada = frase.split(' ');
//   let maiorPalavra = fraseQuebrada[0];
//   for (let i in fraseQuebrada) {
//     if (fraseQuebrada[i].length > maiorPalavra.length) {
//       maiorPalavra = fraseQuebrada[i];
//     }
//   }
//   return maiorPalavra;
// }

// console.log(longestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`));

// Exercício 3

// const counter = document.getElementById('counter');
// const button = document.getElementById('button');

// let clickCounter = 0;

// button.addEventListener('click', () => {
//   counter.style.boxShadow = '0 2px 10px green'
//   clickCounter += 1;
//   counter.innerText = clickCounter;
// })
