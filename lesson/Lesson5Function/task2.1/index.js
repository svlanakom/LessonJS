function getSum(firstNumber, secondNumber) {
  let sum = 0;

  for (let i = firstNumber; i <= secondNumber; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}
getSum(50, 60);
