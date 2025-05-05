const { sum, print } = require("./1001");

describe("sum", () => {
  test("should return the 19 when the numbers are 10 and 9", () => {
    expect(sum(10, 9)).toBe(19);
  });

  test("should return the -6 when the numbers are -10 and 4", () => {
    expect(sum(-10, 4)).toBe(-6);
  });

  test("should return the 8 when the numbers are 15 and -7", () => {
    expect(sum(15, -7)).toBe(8);
  });
});

describe("print", () => {
  test('should return a string equal to "X = 19" when the number is 19', () => {
    expect(print(19)).toBe("X = 19");
  });

  test('should return a string equal to "X = -6" when the number is -6', () => {
    expect(print(-6)).toBe("X = -6");
  });

  test('should return a string equal to "X = 8" when the number is 8', () => {
    expect(print(8)).toBe("X = 8");
  });
});
