const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addNightShift = (obj, key, value) => obj[key] = value;

addNightShift(lesson2, 'turno', 'noite');

// Exercício 2
const listKeys = (obj) => Object.keys(obj);

// Exercício 3
const objLength = (obj) => Object.keys(obj).length;

// Exercício 4
const objValues = (obj) => Object.values(obj);
