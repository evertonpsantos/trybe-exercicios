export const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni);
  const toIndex = units.indexOf(conversionUni);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
}