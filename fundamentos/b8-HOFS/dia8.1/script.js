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
  const numeroSorteado = Math.floor((Math.random() * 6));
  return conferirNumero(numeroApostado, numeroSorteado);
}