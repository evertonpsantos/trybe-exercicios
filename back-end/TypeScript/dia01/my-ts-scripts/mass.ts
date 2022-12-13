const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(conversionUni); // pegamos o index da unidade para a conversão
  console.log(fromIndex)
  console.log(toIndex)
  const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
  console.log(exponent);
  return value * Math.pow(10, exponent);
}