const functions = require('./functions');

test('String functions', () => {
  it('takes a string and returns that string with the first character capitalized', () => {
    expect(functions.capitalize('hello')).toBe('Hello');
    expect(functions.capitalize('hello')).toEqual('Hello');
  });

  it('takes a string and returns it reversed', () => {
    expect(functions.reverse('hello')).toBe('olleh');
    expect(functions.reverse('hello')).toEqual('olleh');
  });
});


test('Calculator functions', () => {
  it('add 2 numbers properly', () => {
    expect(functions.sum(2, 2)).toBe(4);
    expect(functions.sum(1, 3)).not.toBe(3);
  });

  it('subtract 2 numbers properly', () => {
    expect(functions.subtract(2, 2)).toBe(0);
    expect(functions.subtract(5, 2)).toEqual(-3);
  });

  it('multiplies 2 numbers properly', () => {
    expect(functions.multiply(3, 4)).toBe(12);
    expect(functions.multiply(10, 10)).toEqual(100);
  });

  it('divides 2 numbers properly', () => {
    expect(functions.divide(4, 4)).toBe(1);
    expect(functions.divide(10, 5)).toEqual(2);
  });
});


test('Caesar Cypher function', () => {
  it('converts given string and shift input using caesar cypher', () => {
    expect(functions.cypher('hello world', 5).toEqual('mjqqt btwqi'));
  });

  it('converts given string with uppercase letters properly using cypher', () => {
    expect(functions.cypher('Microverse Javascript', 13).toEqual('Zvpebirefr Wninfpevcg'));
  });
});


test('Array analysis function', () => {
  it('takes an array of numbers and returns object with average, min, max, and length properties', () => {
    expect(functions.arrayAnalysis([1, 2, 3]).toEqual({
      average: 2, min: 1, max: 3, length: 3,
    }));
  });
});
