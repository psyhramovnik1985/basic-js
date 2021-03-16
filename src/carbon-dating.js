const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let result;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || parseFloat(sampleActivity) > MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0 || !parseFloat(sampleActivity)) {
    return false;
  }
 
  result = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  return result;
};
