const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let mas = [];
  let status = false;

  if (toString.call(arr) !== "[object Array]") {
    throw new Error("Error");
  } 
  arr.map(func);


  function func (e,i,arMas) {
    if (e !== '--double-prev' && e !=='--double-next' && e !=='--discard-prev' && e !=='--discard-next' && !status) {
      mas.push(e);
    }  else {
      switch (e) {
        case "--discard-prev":
            if (arMas[i - 2] !== '--discard-next') {
              mas.pop();
            }
              break;

        case "--discard-next":
            status = true;
              break;

        case "--double-prev":
            if (arMas[i - 2] !== '--discard-next' && i !== 0) {
              mas.push(mas[mas.length -1]);
            }            
              break;

        case "--double-next":
            if (i < arMas.length-1) {
              mas.push(arMas[i+1]);
            }
            
              break;

        default:
            status = false;
          break;
      }
    } 
  }

  return mas;
};
