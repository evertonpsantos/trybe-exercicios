export const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni);
  const toIndex = units.indexOf(conversionUni);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(100, exponent);
}