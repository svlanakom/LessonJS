import sum, { getSquaredArray, getOddNumbers } from "./calculator.js";

it("should return square of element in array", () => {
  const result = getSquaredArray([2, 4, 8]);

  expect(result).toEqual([4, 16, 64]);
});

it("should return array with odd numbers ", () => {
  const result = getOddNumbers([6, 4, 7, 9, 11]);
  expect(result).toEqual([7, 9, 11]);
});

it(" should return sum of elements", () => {
  const result = sum(4, 6);
  expect(result).toEqual(10);
});
