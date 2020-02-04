const functions = require('./functions');

describe('String functions', () => {
  it('takes a string and returns that string with the first character capitalized', () => {
    expect(functions.capitalize('hello')).toBe('Hello');
    expect(functions.capitalize('hello')).toEqual('Hello');
  });

  it('takes a string and returns it reversed', () => {
    expect(functions.reverse('hello')).toBe('olleh');
    expect(functions.reverse('hello')).toEqual('olleh');
  });
});


describe('Calculator functions', () => {
  it('add 2 numbers properly', () => {
    expect(functions.calculator.sum(2, 2)).toBe(4);
    expect(functions.calculator.sum(1, 3)).not.toBe(3);
  });

  it('subtract 2 numbers properly', () => {
    expect(functions.calculator.subtract(2, 2)).toBe(0);
    expect(functions.calculator.subtract(5, 2)).toEqual(3);
  });

  it('multiplies 2 numbers properly', () => {
    expect(functions.calculator.multiply(3, 4)).toBe(12);
    expect(functions.calculator.multiply(10, 10)).toEqual(100);
  });

  it('divides 2 numbers properly', () => {
    expect(functions.calculator.divide(4, 4)).toBe(1);
    expect(functions.calculator.divide(10, 5)).toEqual(2);
  });
});


describe('Caesar Cypher function', () => {
  it('converts given string and shift input using caesar cypher', () => {
    expect(functions.cypher.encrypt('Abc Def!', 100)).toEqual('Wxy Zab!');
  });

  it('converts given string with uppercase letters properly using cypher', () => {
    expect(functions.cypher.decrypt('Wxy Zab!', 100)).toEqual('Abc Def!');
  });
});


describe('Array analysis function', () => {
  it('takes an array of numbers and returns object with average, min, max, and length properties', () => {
    expect(functions.arrayAnalysis([1, 2, 3])).toEqual({ average: 2, min: 1, max: 3, length: 3 });
  });
});
