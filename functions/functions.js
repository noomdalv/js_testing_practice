const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverse = (string) => {
  return string.split('').reverse.join('');
};

const sum = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const arrayAnalysis = (array) => {
  return { average: array.reduce((prev, cur) => prev += cur)/array.length, min: Math.min(array), max: Math.max(array), length: array.length }
};

const cypher = (string, shift) => {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  let encrypt = string.split('');
  
  for (let i = 0; i < encrypt.length; i++) {


    if (alphabet.indexOf(encrypt[i]) === -1) {
      if (encrypt[i].match(/[A-Z]/)) {

        encrypt[i] = encrypt[i].toLowerCase();

        let index = alphabet.indexOf(encrypt[i]) + shift;

        let replace = index > 25 ? alphabet[index - 26] : alphabet[index];
        encrypt[i] = replace.toUpperCase();
      }
      continue;
    }

    let index = alphabet.indexOf(encrypt[i]) + shift;
    
    let replace = index > 25 ? alphabet[index - 26] : alphabet[index];
    encrypt[i] = replace;
    
  };
  
  return encrypt.join('');
};

console.log(cypher('Abc Xyz!', 4))
  


