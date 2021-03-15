const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],

  getLength() {
    return this.arrChain.length;
  },

  addLink(value) {
    this.arrChain.push("( " + String(value) + " )");
    return this;
  },
  removeLink(position) {
    if (typeof position === "number") {
      this.arrChain.splice(position-1, 1);
      return this;
    } else {
      this.arrChain.length = 0;
      throw new Error("Error");
    }
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    let result = this.arrChain.join("~~");
    this.arrChain.length = 0;
    return result;
  },
};

module.exports = chainMaker;