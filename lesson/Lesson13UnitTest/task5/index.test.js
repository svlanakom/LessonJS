import { reverseArray, withdraw, getAdults } from "./index";

it("should reverse aaray", () => {
  const result = reverseArray([2, 6, 5, 9]);

  expect(result).toEqual([9, 5, 6, 2]);
});

it("should reverse aaray", () => {
  const result = reverseArray([5, 4, 3, 1]);

  expect(result).toEqual([1, 3, 4, 5]);
});

it("should reverse aaray", () => {
  const result = reverseArray([1, 2, 3, 4]);

  expect(result).toEqual([4, 3, 2, 1]);
});

it("should be null if get not array", () => {
  const result = reverseArray("summer");
  expect(result).toEqual(null);
});

it("should return object with value >=18", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18, "Anna Ly": 36 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18, "Anna Ly": 36 });
});

it("should return object with value >=18", () => {
  const result = getAdults({ "John Doe": 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ "John Doe": 19, Bob: 18 });
});

it("should return empty object if function get not object ", () => {
  const result = getAdults("summer");
  expect(result).toEqual({});
});

it("should return  difference  between number in second array and amount ", () => {
  const result = withdraw(
    ["Denis", "Andrews", "Jack"],
    [100, 80, 1200],
    "Jack",
    500
  );
  expect(result).toEqual(700);
});

it("should return  -1 if amount is less than number in array", () => {
  const result = withdraw(
    ["Denis", "Andrews", "Jack"],
    [100, 80, 10],
    "Jack",
    500
  );
  expect(result).toEqual(-1);
});
it("should return  difference  between number in second array and amount", () => {
  const result = withdraw(
    ["Denis", "Andrews", "Jack"],
    [100, 80, 1000],
    "Jack",
    500
  );
  expect(result).toEqual(500);
});
