it("17 is it 17", () => {
  expect(17).toEqual(17);
});
it("18 is not 17", () => {
  expect(18).not.toEqual(17);
});

function getEvenNumbers(array) {
  return array.filter((el) => el % 2 === 0);
}

it("should get only even numbers from array", () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
