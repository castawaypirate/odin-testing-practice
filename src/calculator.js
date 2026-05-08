function checkValidNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Arguments must be numbers");
  }
}

export default {
  add: function (a, b) {
    checkValidNumbers(a, b);
    return a + b;
  },

  subtract: function (a, b) {
    checkValidNumbers(a, b);
    return a - b;
  },

  divide: function (a, b) {
    checkValidNumbers(a, b);
    if (b === 0) {
      throw new Error("Cannot divide with zero");
    }
    return a / b;
  },

  multiply: function (a, b) {
    checkValidNumbers(a, b);
    return a * b;
  },
};
