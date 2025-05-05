import { test, expect, describe } from "vitest";
import { getCityByDDD, makeOutput } from "./1050";

describe("getCityByDDD", () => {
  test("should return 'Sao Paulo' for DDD 11", () => {
    expect(getCityByDDD("11")).toBe("Sao Paulo");
  });
});

describe("makeOutput", () => {
  test("should return 'Sao Paulo' for city 'Sao Paulo'", () => {
    expect(makeOutput("Sao Paulo")).toBe("Sao Paulo");
  });

  test("should return 'DDD nao cadastrado' for city 'undefined'", () => {
    expect(makeOutput()).toBe("DDD nao cadastrado");
  });
});
