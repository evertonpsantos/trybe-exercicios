const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Exercício 1
const addNightShift = (obj, key, value) => (obj[key] = value);

addNightShift(lesson2, "turno", "noite");

// Exercício 2
const listKeys = (obj) => Object.keys(obj);

// Exercício 3
const objLength = (obj) => Object.keys(obj).length;

// Exercício 4
const objValues = (obj) => Object.values(obj);

// Exercício 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Exercício 6
const studentNumber = (obj) => {
  let studentCount = 0;
  const lessons = Object.keys(obj);
  for (let i in lessons) {
    studentCount += obj[lessons[i]]["numeroEstudantes"];
  }
  return studentCount;
};

// Exercício 7
const getValueByNumber = (obj, position) => Object.values(obj)[position];

// Exercício 8
const verifyIfMatches = (obj, key, value) => {
  const aux = Object.entries(obj);
  for (let i in aux) {
    if (aux[i][0] === key && aux[i][1] === value) {
      return true;
    }
  }
  return false;
};
console.log(verifyIfMatches(lesson3, 'turno', 'noite'));
