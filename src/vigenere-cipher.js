const CustomError = require("../extensions/custom-error");

let letterMap = new Map();
const firstLetterCode = "A".charCodeAt(0);
const lastLetterCode = "Z".charCodeAt(0);
for(let i = firstLetterCode; i <= lastLetterCode; i++) {
  letterMap.set(String.fromCharCode(i), i - firstLetterCode);
}
class VigenereCipheringMachine {

  constructor(directMode) {
    this.reverseMode = directMode === false;
  }
  
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyChar = 0;
    for (let i = 0; i < message.length; i++) {
      if (letterMap.has(message[i])) {
        if (keyChar === key.length) keyChar = 0;
        result += String.fromCharCode((letterMap.get(message[i]) + letterMap.get(key[keyChar])) % 26 + firstLetterCode);
        keyChar++;
      } else {
        result += message[i];
      }
    }
    return (this.reverseMode) ? result.split('').reverse().join('') : result;
  }

  decrypt(message, key) {
    key = key.toUpperCase();

    let result = '';
    let keyChar = 0;
    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (letterMap.has(char)) {
        if (keyChar === key.length) keyChar = 0;
        result += String.fromCharCode((letterMap.get(char) - letterMap.get(key[keyChar]) + 26) % 26 + firstLetterCode);
        keyChar++;
      } else {
        result += char;
      }
    }
    return (this.reverseMode) ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
