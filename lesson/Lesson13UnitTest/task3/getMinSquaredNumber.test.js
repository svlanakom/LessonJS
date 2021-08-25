import getMin from "./getMinSquaredNumber";

it("should return square number for module", () => {
  const result = getMin([2, -4, 5]);
  expect(result).toEqual(4);
});

it("should return square number for module", () => {
  const result = getMin([]);
  expect(result).toEqual(null);
});
it("should return square number for module", () => {
  const result = getMin();
  expect(result).toEqual(null);
});
