const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (array1, array2) => {
  return array1.map((student, index) => {
    return ({
      name: student,
      average: array2[index].reduce((acc, curr, idx, arr) => {
      if (idx === arr.length -1) return (acc + curr) / arr.length;
      return acc += curr;
    }, 0)
  });
});
}

console.log(studentAverage(students, grades));