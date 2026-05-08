function containsNonNumericalValues(array) {
  for (let el of array) {
    if (typeof el !== "number") {
      return true;
    }
  }
  return false;
}

function computesArrayAverage(array) {
  let sum = 0;
  for (const el of array) {
    sum += el;
  }

  return sum / array.length;
}

function computesArrayMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

function computesArrayMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

export default function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Argument must be an array");
  }

  if (array.length === 0) {
    throw new Error("Array must contain at least one value");
  }

  if (containsNonNumericalValues(array)) {
    throw new Error("Array contains non-numerical values");
  }

  return {
    average: computesArrayAverage(array),
    min: computesArrayMin(array),
    max: computesArrayMax(array),
    length: array.length,
  };
}
