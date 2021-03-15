const CustomError = require("../extensions/custom-error");

const season = ['winter', 'spring', 'summer', 'autumn'];

module.exports = function getSeason(_date) {
  if (_date === undefined) {return 'Unable to determine the time of year!';}

  if (toString.call(_date) !== "[object Date]") {
    throw new Error("Error");
  }  

  let month = _date.getMonth();

  if (month >= 2 && month <= 4) {return season[1];}
  if (month >= 5 && month <= 7) {return season[2];}
  if (month >= 8 && month <= 10) {return season[3];}
  if ((month >= 0 && month <= 1) || month === 11) {return season[0];}

  
};
