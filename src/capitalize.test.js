import capitalize from "./capitalize.js";

describe("capitalize", () => {
  test("should exist", () => {
    expect(typeof capitalize).toBe("function");
  });

  describe("capitalize()", () => {
    test("should return value back on variable not string", () => {
      const obj = {};
      expect(capitalize(obj)).toBe(obj);
    });

    test("should return empty string back on empty string", () => {
      const str = "";
      expect(capitalize(str)).toBe(str);
    });

    test("should capitalize first letter", () => {
      expect(capitalize("test")).toBe("Test");
    });

    test("should return same word if first letter is already capitalized", () => {
      expect(capitalize("And")).toBe("And");
    });

    test("should capitalize only alphabet letters", () => {
      expect(capitalize("&another 1")).toBe("&another 1");
    });

    test("should capitalize only first letter and leave rest of the word unmodified", () => {
      expect(capitalize("anD another 1")).toBe("AnD another 1");
    });

    test("should capitalize only first letter if word is one letter", () => {
      expect(capitalize("a")).toBe("A");
    });

    test("should return character back if character not an alphabet letter", () => {
      expect(capitalize("$")).toBe("$");
    });
  });
});
