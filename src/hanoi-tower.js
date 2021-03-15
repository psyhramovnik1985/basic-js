const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(_disksNumber, _turnsSpeed) {
  let obj = {turns: null, seconds: null };
  obj.turns = Math.pow(2,_disksNumber) - 1;
  obj.seconds = Math.floor(obj.turns/(_turnsSpeed/3600));
  return obj;
};
