import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {repeatTimes : repeatTimes = 1,
       separator : separator = '+',
       addition : addition = '',
       additionRepeatTimes : additionRepeatTimes = 1,
       additionSeparator : additionSeparator = '|',
  } = options;
  let output = [];
  let additionArray = [];
  let stringArray = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArray.push(addition + '');
  }
  
  stringArray.push(str + '');
  stringArray.push(additionArray.join(additionSeparator));

  for (let i = 0; i < repeatTimes; i++) {
    output.push(stringArray.join(''));
  }
  
  return output.join(separator);
}