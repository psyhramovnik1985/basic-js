const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  let count = 1;  
  let arrResult = 0;
  arr.forEach((e) => {
    if (Array.isArray(e)) {
      count = this.calculateDepth(e);
      if (arrResult < count) {
        arrResult = count;
      }            
    }
  }) 
  arrResult += 1;
  return arrResult;
  }
};