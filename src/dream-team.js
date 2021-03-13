const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false}
  let mas = [];
  let charCode;
  members.map(func);
  function func (e){
    if (typeof e === 'string'){
      charCode = e.trim().split('')[0].toUpperCase();
      if (charCode.charCodeAt(0) >= 65 && charCode.charCodeAt(0) <= 90) {
        mas.push(charCode);
      }        
    }      
  }
  return mas.sort().join('');
};
