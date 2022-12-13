import readline from 'readline-sync';

export const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni);
  const toIndex = units.indexOf(conversionUni);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
}

export function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a conversão:');

  const toUnitChoice = units[toUnitChoiceIndex];
  const fromUnitChoice = units[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec()