import { calc } from "./calculator";

it("should to be 1 + 1 = 2", () => {
  const result = calc("1 + 1");

  expect(result).toEqual("1 + 1 = 2");
});

it("should  to be 1 - 1 = 0", () => {
  const result = calc("1 - 1");

  expect(result).toEqual("1 - 1 = 0");
});

it("should to  be 2 * 2 = 4", () => {
  const result = calc("2 * 2");

  expect(result).toEqual("2 * 2 = 4");
});

it("should to be 4 / 2 = 2", () => {
  const result = calc("4 / 2");

  expect(result).toEqual("4 / 2 = 2");
});

it("should return null if get not a string", () => {
  const result = calc(6);

  expect(result).toEqual(null);
});
