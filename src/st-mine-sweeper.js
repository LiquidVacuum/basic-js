import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const output = matrix.slice().map((elem) => elem.slice().fill(0));

  function markPerimeter(x, y) {
    for (let k = x - 1; k <= x + 1; k++) {
      for (let m = y - 1; m <= y + 1; m++) {
        if (k !== x || m !== y) {
          if (output[k] !== undefined && output[k][m] !== undefined) {
            output[k][m] += 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) markPerimeter(i, j);
    }
  }

  return output;
}
