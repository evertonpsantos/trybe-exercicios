const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate} = require('./script')

describe('The sum function', () => {
  it('returns 9 when sum(4, 5)', () => {
    expect(sum(4, 5)).toEqual(9);
  })
  it('returns 0 when sum(0, 0)', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  it('throws error when sum(4, "5")', () => {
    expect(() => {sum(4, "5")}).toThrowError('parameters must be numbers');
  })
});

describe('The myRemove function', () => {
  it('returns [1, 2, 4] when myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('not returns [1, 2, 3, 4] when myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  it('returns [1, 2, 3, 4] when myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('The myFizzBuzz function', () => {
  it('returns fizzbuzz when myFizzBuzz(15)', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  })
  it('returns fizz when myFizzBuzz(9)', () => {
    expect(myFizzBuzz(9)).toEqual('fizz');
  })
  it('returns buzz when myFizzBuzz(25)', () => {
    expect(myFizzBuzz(25)).toEqual('buzz');
  })
  it('returns 2 when myFizzBuzz(2)', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  })
  it('returns false when myFizzBuzz("cinco")', () => {
    expect(myFizzBuzz("cinco")).toEqual(false);
  })
});

describe('The encode function', () => {
  it('is a function', () => {
    expect(typeof encode).toEqual('function');
  })
  it('returns 12345 when encode("aeiou")', () => {
    expect(encode("aeiou")).toEqual('12345')
  })
  it('returns A5rél34 when encode("Aurélio")', () => {
    expect(encode("Aurélio")).toEqual('A5rél34');
  })
  it('returns string of same length as parameter', () => {
    expect(encode('4v4').length).toEqual(3);
  })
});

describe('The decode function', () => {
  it('is a function', () => {
    expect(typeof decode).toEqual('function');
  })
  it('returns aeiou when decode("12345")', () => {
    expect(decode('12345')).toEqual('aeiou');
  })
  it('returns sequoia when decode("s2q5431")', () => {
    expect(decode('s2q5431')).toEqual('sequoia');
  })
  it('returns string of same length as parameter', () => {
    expect(encode('ovo').length).toEqual(3);
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});