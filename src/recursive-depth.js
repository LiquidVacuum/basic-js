const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    return arr.some(item => Array.isArray(item)) ? 1 + this.calculateDepth(arr.flat(1)) : 1;
  }
};