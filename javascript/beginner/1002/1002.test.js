const { calculateArea, ouputString } = require("./1002");

describe("calculateArea", () => {
  test("should return 12.5664 when the radius is 2.00", () => {
    expect(calculateArea(2.0)).toBe(12.5664);
  });

  test("should return 31819.3103 when the radius is 100.64", () => {
    expect(calculateArea(100.64)).toBe(31819.3103);
  });

  test("should return 70685.7750 when the radius is 150.00", () => {
    expect(calculateArea(150.0)).toBe(70685.775);
  });
});

describe("ouputString", () => {
  test("should return the area of a circle", () => {
    expect(ouputString(12.5664)).toBe("A=12.5664");
  });

  test("should return 'A=70685.7750' when the radius is 150.00", () => {
    const area = calculateArea(150.0);
    expect(ouputString(area)).toBe("A=70685.7750");
  });

  test("should return 'A=70685.7750' when the area is 70685.775", () => {
    const area = 70685.775;
    expect(ouputString(area)).toBe("A=70685.7750");
  });
});
