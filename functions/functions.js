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
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

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
      const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

      const decrypt = string.split('');

      for (let i = 0; i < decrypt.length; i++) {
        if (alphabet.indexOf(decrypt[i]) === -1) {
          if (decrypt[i].match(/[A-Z]/)) {
            decrypt[i] = decrypt[i].toLowerCase();
						const replace = alphabet[Math.abs((alphabet.indexOf(decrypt[i]) - shift)% 26)];

            decrypt[i] = replace.toUpperCase();
						console.log(decrypt[i]);
          }
          continue;
        }
				const replace = alphabet[Math.abs((alphabet.indexOf(decrypt[i]) - shift)% 26)];
				console.log(replace);
        console.log(decrypt[i]);
      }
      return decrypt.join('');
    },
  },
};
functions.cypher.decrypt("Wxy Zab!", 100);
module.exports = functions;
