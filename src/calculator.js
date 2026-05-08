export default {
  checkValidNumbers: function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be numbers");
    }
  },

  add: function (a, b) {
    this.checkValidNumbers(a, b);
    return a + b;
  },

  subtract: function (a, b) {
    this.checkValidNumbers(a, b);
    return a - b;
  },

  divide: function (a, b) {
    this.checkValidNumbers(a, b);
    if (b === 0) {
      throw new Error("Cannot divide with zero");
    }
    return a / b;
  },

  multiply: function (a, b) {
    this.checkValidNumbers(a, b);
    return a * b;
  },
};
