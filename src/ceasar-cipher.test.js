import ceasarCipher from "./ceasar-cipher.js";

describe("ceasar cipher", () => {
  test("should exist", () => {
    expect(typeof ceasarCipher).toBe("function");
  });

  describe("ceasarCipher", () => {
    test("should receive text as first argument", () => {
      expect(() => ceasarCipher(123, 1)).toThrow(
        "First argument should be a string",
      );
    });

    test("throws an error if the second argument is completely missing", () => {
      expect(() => ceasarCipher("abc")).toThrow(
        "Second argument should be a number",
      );
    });

    test("should receive number as second argument", () => {
      expect(() => ceasarCipher("message", "number")).toThrow(
        "Second argument should be a number",
      );
    });

    test("should return empty string when message is an empty string", () => {
      expect(ceasarCipher("", 1)).toBe("");
    });

    test("should return shifted string (example 1)", () => {
      expect(ceasarCipher("xyz", 3)).toBe("abc");
    });

    test("should return shifted string (example 2)", () => {
      expect(ceasarCipher("abc", 2)).toBe("cde");
    });

    test("should return shifted string (example 3)", () => {
      expect(ceasarCipher("hij", -1)).toBe("ghi");
    });

    test("should return shifted string (example 4)", () => {
      expect(ceasarCipher("abc", -5)).toBe("vwx");
    });

    test("should return shifted string (example 5)", () => {
      expect(ceasarCipher("abc", 53)).toBe("bcd");
    });

    test("should return shifted string with capital letters (example 1)", () => {
      expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr");
    });

    test("should return shifted string with capital letters (example 2)", () => {
      expect(ceasarCipher("AbC", -51)).toBe("BcD");
    });

    test("should return shifted string with capital letters (example 3)", () => {
      expect(ceasarCipher("BcD", -53)).toBe("AbC");
    });

    test("should return shifted string with capital letters (example 4)", () => {
      expect(ceasarCipher("HiJ", -79)).toBe("GhI");
    });

    test("should return shifted string with capital letters and non alphabetical characters", () => {
      expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    });

    test("returns the same string if the shift is 0", () => {
      expect(ceasarCipher("Hello World", 0)).toBe("Hello World");
    });

    test("returns the same string if the shift is a perfect multiple of 26", () => {
      expect(ceasarCipher("Hello World", 26)).toBe("Hello World");
      expect(ceasarCipher("Hello World", -26)).toBe("Hello World");
    });

    test("leaves numbers unmodified", () => {
      expect(ceasarCipher("Agent 007", 5)).toBe("Fljsy 007");
    });
  });
});
