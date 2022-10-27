let { randomNumber, 
  wordToUppercase, 
  onlyFirstLetter, 
  concatenateStrings,
  getDogPictures} = require('./service');

  describe("Testando a função randomNumber", () => {
    test("Mockando resultado", () => {
      randomNumber = jest.fn().mockReturnValue(10);
      expect(randomNumber()).toBe(10);
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
    });
    
    test("Mockando implementação", () => {
      randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
      expect(randomNumber(6,2)).toBe(3);
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
      expect(randomNumber).toHaveBeenCalledWith(6, 2);
      expect(randomNumber(6,2)).not.toBe(3);
    });
    
    test("Mockando duas implementações no mesmo teste", () => {
      randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
      expect(randomNumber(1, 2, 3)).toBe(6);
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
      expect(randomNumber).toHaveBeenCalledWith(1, 2, 3);
    
      randomNumber.mockReset();
    
      randomNumber = jest.fn().mockImplementation((a) => a * 2);
    
      expect(randomNumber(2)).toBe(4);
      expect(randomNumber).toHaveBeenCalled();
      expect(randomNumber).toHaveBeenCalledTimes(1);
      expect(randomNumber).toHaveBeenCalledWith(2);
    });
  })

  describe("Testando wordToUppercase, onlyFirstLetter, concatenateStrings", () => {
    test("Testa que as funções estão funcionando corretamente", () => {
      expect(wordToUppercase('grama')).toBe('GRAMA');
      expect(onlyFirstLetter('grama')).toBe('g');
      expect(concatenateStrings('gr', 'ama')).toBe('grama');
    });

    test("Mockando funções", () => {
      wordToUppercase = jest.fn().mockImplementation((string) => string.toLowerCase())
      expect(wordToUppercase('GRAMA')).toBe('grama');
      expect(wordToUppercase).toHaveBeenCalled();
      expect(wordToUppercase).toHaveBeenCalledTimes(1);

      onlyFirstLetter = jest.fn().mockImplementation((string) => string.slice(-1))
      expect(onlyFirstLetter('grama')).toBe('a');
      expect(onlyFirstLetter).toHaveBeenCalled();
      expect(onlyFirstLetter).toHaveBeenCalledTimes(1);

      concatenateStrings = jest.fn().mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`)
      expect(concatenateStrings('gr', 'a', 'ma')).toBe('grama');
      expect(concatenateStrings).toHaveBeenCalled();
      expect(concatenateStrings).toHaveBeenCalledTimes(1);

      wordToUppercase = jest.fn().mockImplementation((string) => string.toUpperCase())
      expect(wordToUppercase('lama')).toBe('LAMA');
    })
  });

  describe("Testando função getDogPictures", () => {
    afterEach(() => getDogPictures.mockReset());

    test("Testa sucesso da requisição", async () => {
    getDogPictures = jest.fn().mockResolvedValue('request success');
    getDogPictures();
    expect(getDogPictures).toHaveBeenCalled()
    expect(getDogPictures).toHaveBeenCalledTimes(1)
    expect(await getDogPictures()).toBe("request success");
    expect(getDogPictures).toHaveBeenCalledTimes(2)
    })

    test("Testa falha da requisição", async () => {
    getDogPictures = jest.fn().mockResolvedValue('request failed');
    getDogPictures();
    expect(getDogPictures).toHaveBeenCalled()
    expect(getDogPictures).toHaveBeenCalledTimes(1)
    expect(await getDogPictures()).toBe("request failed");
    expect(getDogPictures).toHaveBeenCalledTimes(2)
    })
    
  });



