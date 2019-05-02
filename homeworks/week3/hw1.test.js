const stars = require('./hw1');

describe('hw1', () => {
  it('should return correct answer when n = 0', () => {
    expect(stars(0)).toEqual('');
  });
  it('should return correct answer when n = 1', () => {
    expect(stars(1)).toEqual(['*']);
  });
  it('should return correct answer when n = 3', () => {
    expect(stars(3)).toEqual(['*', '**', '***']);
  });
  it('should return correct answer when n = 6', () => {
    expect(stars(6)).toEqual(['*', '**', '***', '****', '*****', '******']);
  });
  it('should return correct answer when n = 100', () => {
    expect(stars(100)).toEqual('');
  });
  it('should return correct answer when n = "hello"', () => {
    expect(stars('hello')).toEqual('');
  });
});
