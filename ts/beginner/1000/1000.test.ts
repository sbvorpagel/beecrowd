import { test, expect, describe } from "vitest";
import { helloWorld } from "./1000";

describe("helloWorld", () => {
  test('should return "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});
