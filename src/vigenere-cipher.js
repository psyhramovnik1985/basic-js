const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverseStatus) {
    if (reverseStatus === true || reverseStatus === null || reverseStatus === undefined) {
      this.reverseStatus = false;
    } else {
      this.reverseStatus = true;
    }
  }

  encrypt(message, key) {
    if (arguments.length <= 1) {
      throw new Error("Error");
    }
    let arrStr = [];
    let bufferKey = [];
    let arrKey = [];

    let str = message.toUpperCase();
    key = key.toUpperCase();

    arrStr = str.split('');
    bufferKey = key.split('');

    let z = 0;

    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i].charCodeAt(0) < 65 || arrStr[i].charCodeAt(0) > 90) {
        arrKey.push(arrStr[i]);       
      }  else {
        if (z === bufferKey.length) {z = 0;}   
        arrKey.push(bufferKey[z]);
        z++;
        if (arrKey[i].charCodeAt(0) + arrStr[i].charCodeAt(0) > 155) {
          arrStr[i] = String.fromCharCode(arrKey[i].charCodeAt(0) + arrStr[i].charCodeAt(0) - 91);            
        } else {
          arrStr[i]= String.fromCharCode(arrKey[i].charCodeAt(0) + arrStr[i].charCodeAt(0) - 65)
        }
      }           
    }
    if (this.reverseStatus) {
      return arrStr.reverse().join('');
    } else {
      return arrStr.join(''); 
    }      
  }  


  decrypt(encryptedMessage, key) {
    if (arguments.length <= 1) {
      throw new Error("Error");
    }

    let arrStr = [];
    let bufferKey = [];
    let arrKey = [];

    let str = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    arrStr = str.split('');
    bufferKey = key.split('');

    let z = 0;

    for (let i = 0; i < arrStr.length; i++) {
      if (arrStr[i].charCodeAt(0) < 65 || arrStr[i].charCodeAt(0) > 90) {
        arrKey.push(arrStr[i]);       
      }  else {
        if (z === bufferKey.length) {z = 0;}   
        arrKey.push(bufferKey[z]);
        z++;

        if (arrStr[i].charCodeAt(0) - arrKey[i].charCodeAt(0) >=0) {
          arrStr[i] = String.fromCharCode(arrStr[i].charCodeAt(0) - arrKey[i].charCodeAt(0)+65);
        } else {
          arrStr[i] = String.fromCharCode(arrStr[i].charCodeAt(0) - arrKey[i].charCodeAt(0)+91);
        }        
      }           
    }
    if (this.reverseStatus) {
      return arrStr.reverse().join('');
    } else {
      return arrStr.join(''); 
    }
   
  }
}

module.exports = VigenereCipheringMachine;
