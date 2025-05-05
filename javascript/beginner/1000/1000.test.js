const helloWorld = require("./1000");

describe("helloWorld", () => {
  test('should return "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});
