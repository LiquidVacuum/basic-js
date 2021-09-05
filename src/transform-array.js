import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (!Array.isArray(arr)) throw new Error('Argument is not an array.');
  
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case ('--discard-prev'):
        output.pop();
        break;
      case ('--double-next'):
        if (i + 1 < arr.length) output.push(arr[i + 1]);
        break;
      case ('--discard-next'):
        i++;
        output.push(null);
        break;
      case ('--double-prev'):
        if (i > 0 && output[output.length - 1] !== null) output.push(arr[i - 1]);
        break;
      default:
        output.push(arr[i]);
    }
  }
  return output.filter(elem => elem !== null);
  }