export const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export function convert(value: number, baseUni: string, conversionUni: string):number {
  const fromIndex = units.indexOf(baseUni);
  const toIndex = units.indexOf(conversionUni);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(100, exponent);
}