const functions = {
  capitalize: string => string.charAt(0).toUpperCase() + string.slice(1),
  reverse: string => string.split('').reverse().join(''),
  sum: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
  arrayAnalysis: array => ({
    average: array.reduce((prev, cur) => prev += cur) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }),
  cypher: {
    encrypt: (string, shift) => {
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      const encrypt = string.split('');

      for (let i = 0; i < encrypt.length; i++) {
        if (alphabet.indexOf(encrypt[i]) === -1) {
          if (encrypt[i].match(/[A-Z]/)) {
            encrypt[i] = encrypt[i].toLowerCase();

            const index = alphabet.indexOf(encrypt[i]) + shift;

            const replace = index > 25 ? alphabet[index - 26] : alphabet[index];
            encrypt[i] = replace.toUpperCase();
          }
          continue;
        }

        const index = alphabet.indexOf(encrypt[i]) + shift;

        const replace = index > 25 ? alphabet[index - 26] : alphabet[index];
        encrypt[i] = replace;
      }
      return encrypt.join('');
    },
    decrypt: (string, shift) => {
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      const encrypt = string.split('');

      for (let i = 0; i < encrypt.length; i++) {
        if (alphabet.indexOf(encrypt[i]) === -1) {
          if (encrypt[i].match(/[A-Z]/)) {
            encrypt[i] = encrypt[i].toLowerCase();

            const index = alphabet.indexOf(encrypt[i]) - shift;

            const replace = index > 25 ? alphabet[index + 26] : alphabet[index];
            encrypt[i] = replace.toUpperCase();
          }
          continue;
        }

        const index = alphabet.indexOf(encrypt[i]) - shift;

        const replace = index > 25 ? alphabet[index + 26] : alphabet[index];
        encrypt[i] = replace;
      }
      return encrypt.join('');
    },
  },
};

module.exports = functions;
