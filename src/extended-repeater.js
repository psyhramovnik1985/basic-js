const CustomError = require("../extensions/custom-error");

module.exports = function repeater(_str, _options) {
  let str = String(_str);
  let result = "";

  if (!_options.hasOwnProperty("repeatTimes")) {
    _options.repeatTimes = 1;
  }

  if (!_options.hasOwnProperty("separator")) {
    _options.separator = '+';
  }

  if (!_options.hasOwnProperty("addition")) {
    _options.addition = '';
  }

  if (!_options.hasOwnProperty("additionSeparator")) {
    _options.additionSeparator = '|';
  }  
  
  for (let j = 1; j <= _options.repeatTimes; j++) {
    if (j === 1){
      result += str + _options.addition;
    } else {
      result += _options.separator + str + _options.addition;
    }
    
    if (_options.hasOwnProperty("addition") && _options.hasOwnProperty("additionRepeatTimes")) {
      for (let i = 1; i < _options.additionRepeatTimes; i++) {
        result += _options.additionSeparator + _options.addition
      }
      
    }
  }
  return result;
};