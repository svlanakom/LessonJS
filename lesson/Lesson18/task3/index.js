export function sumOfSquares(a, b, ...next) {
  const result = a * a + b * b + next.reduce((acc, el) => el * el, 0);
  return result;
}

sumOfSquares(1, 2, 3, 4);
console.log(sumOfSquares(1, 2, 3, 4));
