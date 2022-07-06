const uppercase = require("./e5");

describe("Testando se a função funciona", () => {
  test("Testa se a função converte a string para caixa alta", (done) => {
    uppercase("hello", (string) => {
      try {
        expect(string).toBe("HELLO");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
