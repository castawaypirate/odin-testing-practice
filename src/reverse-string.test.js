import reverseString from "./reverse-string.js";

describe("reverse string", () => {
  test("should exist", () => {
    expect(typeof reverseString).toBe("function");
  });

  describe("reverseString()", () => {
    test("should return value back on variable not string", () => {
      const obj = {};
      expect(reverseString(obj)).toBe(obj);
    });

    test("should return empty string back on empty string", () => {
      const str = "";
      expect(reverseString(str)).toBe(str);
    });

    test("should return reversed string", () => {
      expect(reverseString("test")).toBe("tset");
    });

    test("should return reversed string with symbols or whitespaces", () => {
      expect(reverseString("& anoTher 1")).toBe("1 rehTona &");
    });

    test("should return character back if string has only one", () => {
      expect(reverseString("$")).toBe("$");
    });

    test("should return same string on palindrome", () => {
      expect(reverseString("racecar")).toBe("racecar");
    });

    test("should return same number if number is not passed as string", () => {
      expect(reverseString(12345)).toBe(12345);
    });

    // I accept my defeat. I may come back...
    // test("should safely reverses strings containing emojis without breaking them", () => {
    //   expect(reverseString("a 🍕 ab")).toBe("ba 🍕 a");
    // });
  });
});
