const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

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
};
