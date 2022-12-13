export const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni);
  const toIndex = units.indexOf(conversionUni);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
}