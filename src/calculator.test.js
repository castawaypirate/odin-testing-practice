import calculator from "./calculator.js";

describe("calculator", () => {
  test("should exist", () => {
    expect(typeof calculator).toBe("object");
    expect(calculator).not.toEqual({});
  });

  describe("calculator", () => {
    test("should contain add function", () => {
      expect(typeof calculator.add).toBe("function");
    });

    test("add function should return error message when one or both arguments are not numbers", () => {
      expect(() => calculator.add(1, "1")).toThrow("Arguments must be numbers");
    });

    test("add function should return the result of addition between two numbers", () => {
      expect(calculator.add(1, 1)).toBe(2);
    });

    test("add function should return the result of addition between one positive and one negative number", () => {
      expect(calculator.add(1, -2)).toBe(-1);
    });

    test("add function should add floating point numbers correctly", () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("should contain subtract function", () => {
      expect(typeof calculator.subtract).toBe("function");
    });

    test("subtract function should return error message when one or both arguments are not numbers", () => {
      expect(() => calculator.subtract(1, "1")).toThrow(
        "Arguments must be numbers",
      );
    });

    test("subtract function should return the result of subtraction between two numbers", () => {
      expect(calculator.subtract(1, 1)).toBe(0);
    });

    test("subtract function should return the result of subtraction between one positive and one negative number", () => {
      expect(calculator.subtract(1, -2)).toBe(3);
    });

    test("subtract function should subtract floating point numbers correctly", () => {
      expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    });

    test("should contain divide function", () => {
      expect(typeof calculator.divide).toBe("function");
    });

    test("divide function should return error message when one or both arguments are not numbers", () => {
      expect(() => calculator.divide(1, "1")).toThrow(
        "Arguments must be numbers",
      );
    });

    test("divide function should return error message when second argument is 0", () => {
      expect(() => calculator.divide(1, 0)).toThrow("Cannot divide with zero");
    });

    test("divide function should return the result of division between two numbers", () => {
      expect(calculator.divide(1, 1)).toBe(1);
    });

    test("divide function should return the result of division between one positive and one negative number", () => {
      expect(calculator.divide(1, -2)).toBe(-0.5);
    });

    test("divide function should divide floating point numbers correctly", () => {
      expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
    });

    test("should contain multiply function", () => {
      expect(typeof calculator.multiply).toBe("function");
    });

    test("multiply function should return error message when one or both arguments are not numbers", () => {
      expect(() => calculator.multiply(1, "1")).toThrow(
        "Arguments must be numbers",
      );
    });

    test("multiply function should return the result of multiplication between two numbers", () => {
      expect(calculator.multiply(1, 1)).toBe(1);
    });

    test("multiply function should return the result of multiplication between one positive and one negative number", () => {
      expect(calculator.multiply(1, -2)).toBe(-2);
    });

    test("multiply function should multiply floating point numbers correctly", () => {
      expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });
  });
});
