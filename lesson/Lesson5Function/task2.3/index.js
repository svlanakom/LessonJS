function sum(from, to) {
  let sums = 0;
  for (let i = from; i <= to; i++) {
    sums += i;
  }
  return sums;
}

function compareSums(a, b, c, d) {
  console.log(sum(a, b) > sum(c, d));
  return sum(a, b) > sum(c, d);
}
compareSums(3, 5, 3, 1);
