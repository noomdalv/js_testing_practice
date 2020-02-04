const functions = {
  capitalize: string => string.charAt(0).toUpperCase() + string.slice(1),
  reverse: string => string.split('').reverse().join(''),
  calculator: {
    sum: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
  },
  arrayAnalysis: array => ({
    average: array.reduce((prev, cur) => prev += cur) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }),
  cypher: {

    encrypt: (string, shift) => {
			let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      const encrypt = string.split('');

      for (let i = 0; i < encrypt.length; i++) {
        if (alphabet.indexOf(encrypt[i]) === -1) {
          if (encrypt[i].match(/[A-Z]/)) {
            encrypt[i] = encrypt[i].toLowerCase();

            const replace = alphabet[(alphabet.indexOf(encrypt[i]) + shift) % 26];
            encrypt[i] = replace.toUpperCase();
          }
          continue;
        }

        const replace = alphabet[(alphabet.indexOf(encrypt[i]) + shift) % 26];
        encrypt[i] = replace;
      }
      return encrypt.join('');
    },
    decrypt: (string, shift) => {			
			return functions.cypher.encrypt(string, (26 - (shift % 26)));
    },
  },
};
console.log(functions.cypher.decrypt('Wxy Zab!', 100));

module.exports = functions;
