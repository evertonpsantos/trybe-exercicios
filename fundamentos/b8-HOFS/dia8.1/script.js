// Exercício 1
const newPerson = (nomeCompleto) => {
  const emailGenerator = nomeCompleto.toLowerCase().replace(" ", "_");
  const newPerson = { nomeCompleto, 
    email: `${emailGenerator}@trybe.com`
  };
  return newPerson
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// Exercício 2
const conferirNumero = (numApostado, numSorteado) => (numApostado === numSorteado) ? `Parabéns, você ganhou!` : `Tente novamente.`;

const resultadoSorteio = (numeroApostado) => {
  const numeroSorteado = Math.floor((Math.random() * 5) + 1);
  console.log(numeroSorteado);
  return conferirNumero(numeroApostado, numeroSorteado);
};

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const contadorDeAcertos = (rightAnswers, studentAnswers) => {
  let counter = 0;
  for (let i in rightAnswers) {
    if (studentAnswers[i] !== 'N.A') {
    if (studentAnswers[i] === rightAnswers[i]) {counter += 1};
    if (studentAnswers[i] !== rightAnswers[i]) {counter -= 0.5}; 
    };  
  }
  return counter;
}

const checandoProvas = (gabarito, respostas, callback) => {
  return callback(gabarito, respostas);
};

console.log(checandoProvas(RIGHT_ANSWERS, STUDENT_ANSWERS, contadorDeAcertos))