const { squareDigits, intDigitsToArray } = require("../src/index");

describe("intDigitsToArray", () => {
  test("it should have 1 as input and return [1]", () => {
    expect(intDigitsToArray(1)).toStrictEqual([1]);
  });

  test("it should have 123 as input and return [1, 2, 3]", () => {
    expect(intDigitsToArray(123)).toStrictEqual([1, 2, 3]);
  });
})
