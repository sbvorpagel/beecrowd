const { getCityByDDD, makeOutput } = require("./1050");

describe("getCityByDDD", () => {
  it("should return 'Sao Paulo' for DDD 11", () => {
    expect(getCityByDDD(11)).toBe("Sao Paulo");
  });
});

describe("makeOutput", () => {
  it("should return 'Sao Paulo' for city 'Sao Paulo'", () => {
    expect(makeOutput("Sao Paulo")).toBe("Sao Paulo");
  });

  it("should return 'DDD nao cadastrado' for city 'undefined'", () => {
    expect(makeOutput(undefined)).toBe("DDD nao cadastrado");
  });
});
