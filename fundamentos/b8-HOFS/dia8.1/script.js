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

// Bonus Parte 1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const dragonRandomDamage = dragon.damage = Math.floor((Math.random() * (dragon.strength - 15 + 1)) + 15);
  return dragonRandomDamage;
}

const warriorDamage = () => {
  const warriorDmg = warrior.damage = Math.floor((Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength);
  return warriorDmg;
}

const mageConsumption = () => {
  if (mage.mana < 15) return { damage: `Não possui mana suficiente`, mana: 0};
  const obj = {
    damage: Math.floor((Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence),
    mana: 15
  }
  return obj;
}

// Bonus Parte 2
const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage();
    warrior.damage = warriorDmg;
    dragon.healthPoints -= warriorDmg;
  },
  mageTurn: (mageConsumption) => {
    const mageDamage = mageConsumption().damage;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
    mage.mana -= mageConsumption().mana; 
  },
  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage();
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  turnResult: () => {
    return battleMembers;
  } 
}

const gameFunctions = () => {gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageConsumption);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResult());
};
