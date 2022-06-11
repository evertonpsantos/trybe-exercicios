function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(stringParam) {
  let splitWord = stringParam.split('');
  let aux = [];
  for (let i = 0; i < splitWord.length; i += 1) {
    if (splitWord[i] === 'a') {
      aux.push('1');
    } else if (splitWord[i] === 'e') {
      aux.push('2');
    } else if (splitWord[i] === 'i') {
      aux.push('3');
    } else if (splitWord[i] === 'o') {
      aux.push('4');
    } else if (splitWord[i] === 'u') {
      aux.push('5');
    } else {
      aux.push(splitWord[i]);
    }
  }
  return aux.join('');
}

console.log(encode('sequoia'));

function decode(stringParam2) {
  let splitWord = stringParam2.split('');
  let aux = [];
  for (let i = 0; i < splitWord.length; i += 1) {
    if (splitWord[i] === '1') {
      aux.push('a');
    } else if (splitWord[i] === '2') {
      aux.push('e');
    } else if (splitWord[i] === '3') {
      aux.push('i');
    } else if (splitWord[i] === '4') {
      aux.push('o');
    } else if (splitWord[i] === '5') {
      aux.push('u');
    } else {
      aux.push(splitWord[i]);
    }
  }
  return aux.join('');
}

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};