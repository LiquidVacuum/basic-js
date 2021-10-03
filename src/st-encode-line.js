import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = [];
  let counter = 1;
  let prev = '';
  str.split('').forEach((char) => {
    if (char === prev) {
      counter++;
    } else {
      arr.push(counter, prev);
      counter = 1;
      prev = char;
    }
  });
  arr.push(counter, prev);
  return arr.filter((x) => x !== 1).join('');
}
