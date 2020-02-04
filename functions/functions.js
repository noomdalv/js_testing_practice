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
		(key, strPlain) => {

    // Int -> String -> String
    let caesar = (k, s) => s.split('')
        .map(c => tr(
            inRange(['a', 'z'], c) ? 'a' :
            inRange(['A', 'Z'], c) ? 'A' : 0,
            k, c
        ))
        .join('');

    // Int -> String -> String
    let unCaesar = (k, s) => caesar(26 - (k % 26), s);

    // Char -> Int -> Char -> Char
    let tr = (base, offset, char) =>
        base ? (
            String.fromCharCode(
                ord(base) + (
                    ord(char) - ord(base) + offset
                ) % 26
            )
        ) : char;

    // [a, a] -> a -> b
    let inRange = ([min, max], v) => !(v < min || v > max);

    // Char -> Int
    let ord = c => c.charCodeAt(0);

    // range :: Int -> Int -> [Int]
    let range = (m, n) =>
        Array.from({
            length: Math.floor(n - m) + 1
        }, (_, i) => m + i);

    // TEST
    let strCipher = caesar(key, strPlain),
        strDecode = unCaesar(key, strCipher);

    return [strCipher, ' -> ', strDecode];

};

    // encrypt: (string, shift) => {
    //   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		//
    //   const encrypt = string.split('');
		//
    //   for (let i = 0; i < encrypt.length; i++) {
    //     if (alphabet.indexOf(encrypt[i]) === -1) {
    //       if (encrypt[i].match(/[A-Z]/)) {
    //         encrypt[i] = encrypt[i].toLowerCase();
		//
    //         const replace = alphabet[(alphabet.indexOf(encrypt[i]) + shift) % 26];
    //         encrypt[i] = replace.toUpperCase();
    //       }
    //       continue;
    //     }
		//
    //     const replace = alphabet[(alphabet.indexOf(encrypt[i]) + shift) % 26];
    //     encrypt[i] = replace;
    //   }
    //   return encrypt.join('');
    // },
    // decrypt: (string, shift) => {
    //   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		//
    //   const decrypt = string.split('');
		//
    //   for (let i = 0; i < decrypt.length; i++) {
    //     if (alphabet.indexOf(decrypt[i]) === -1) {
    //       if (decrypt[i].match(/[A-Z]/)) {
    //         decrypt[i] = decrypt[i].toLowerCase();
		// 				let replace = Math.abs(alphabet.indexOf(decrypt[i] - shift));
    //         replace = replace % 26;
		// 				console.log(replace);
    //         decrypt[i] = alphabet[replace].toUpperCase();
    //       }
    //       continue;
    //     }
		//
		// 		let replace = Math.abs(alphabet.indexOf(decrypt[i] - shift));
		// 		replace = replace % 26;
		// 		console.log(replace);
    //     decrypt[i] = alphabet[replace];
    //   }
    //   return decrypt.join('');
    // },
  },
};
functions.cypher.strDecode(100, "Wxy Zab!");
module.exports = functions;
