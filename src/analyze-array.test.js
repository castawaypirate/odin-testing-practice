import analyzeArray from "./analyze-array.js";

describe("analyze array", () => {
  test("should exist", () => {
    expect(typeof analyzeArray).toBe("function");
  });

  describe("analyzeArray()", () => {
    test("should receive an array as an argument", () => {
      expect(() => analyzeArray(123)).toThrow("Argument must be an array");
    });

    test("should contain at least one value", () => {
      expect(() => analyzeArray([])).toThrow(
        "Array must contain at least one value",
      );
    });

    test("should receive an array of numbers as an argument", () => {
      expect(() => analyzeArray(["2", 1])).toThrow(
        "Array contains non-numerical values",
      );
    });

    test("should return object of stats", () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
    });

    test("should return correct stats for an array with a single element", () => {
      expect(analyzeArray([5])).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1,
      });
    });

    test("should return correct stats for an array with negative numbers and zero", () => {
      expect(analyzeArray([-2, 4, 0, -8])).toEqual({
        average: -1.5,
        min: -8,
        max: 4,
        length: 4,
      });
    });

    test("should return correct stats for an array with floating point numbers", () => {
      expect(analyzeArray([0.0, 0.3, 0.2, 0.1])).toEqual({
        average: 0.15,
        min: 0.0,
        max: 0.3,
        length: 4,
      });
    });
  });
});
