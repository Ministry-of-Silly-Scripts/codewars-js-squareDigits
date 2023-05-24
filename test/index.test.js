const { squareDigits, intDigitsToArray, squareDigitsOfArray } = require("../src/index");

describe("intDigitsToArray", () => {
  test("it should have 1 as input and return [1]", () => {
    expect(intDigitsToArray(1)).toStrictEqual([1]);
  });

  test("it should have 123 as input and return [1, 2, 3]", () => {
    expect(intDigitsToArray(123)).toStrictEqual([1, 2, 3]);
  });
})

describe("squareDigitsOfArray", () => {
  test("it should have [1] as input and return [1]", () => {
    expect(squareDigitsOfArray([1])).toStrictEqual([1]);
  });

  test("it should have [1, 2, 3] as input and return [1, 4, 9]", () => {
    expect(squareDigitsOfArray([1, 2, 3])).toStrictEqual([1, 4, 9]);
  });
})

describe("squareDigits", () => {
  test("it should have 1 as input and return 1", () => {
    expect(squareDigits(1)).toBe(1);
  });

  test("it should have 123 as input and return [1, 2, 3]", () => {
    expect(squareDigits(123)).toBe(149);
  });
})