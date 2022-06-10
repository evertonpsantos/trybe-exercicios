const {sum, myRemove} = require('./script')

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