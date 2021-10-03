import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = n.toString().split('');
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        temp.push(arr[j]);
      }
    }
    set.add(+temp.join(''));
  }
  return Math.max.apply(null, Array.from(set));
}
