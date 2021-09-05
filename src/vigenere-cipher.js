import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 let letterMap = new Map();
 const firstLetterCode = "A".charCodeAt(0);
 const lastLetterCode = "Z".charCodeAt(0);
 for(let i = firstLetterCode; i <= lastLetterCode; i++) {
   letterMap.set(String.fromCharCode(i), i - firstLetterCode);
 }
export default class VigenereCipheringMachine {

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
