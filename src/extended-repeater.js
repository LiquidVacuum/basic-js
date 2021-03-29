const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
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
};
