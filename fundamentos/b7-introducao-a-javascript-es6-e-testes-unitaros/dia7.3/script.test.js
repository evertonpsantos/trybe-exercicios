const sum = require('./script')

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