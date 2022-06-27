const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array.reduce((acc, name) => {
    for (let i in name) {
      if (name[i] === 'a' || name[i] === 'A') acc += 1;
    }
    return acc;
  }, 0);
}

console.log(containsA(names));