export const calc = (expression) => {
  if (typeof expression !== "string") {
    return null;
  }

  const [a, operation, b] = expression.split(" ");
  let result;

  // eslint-disable-next-line default-case
  switch (operation) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};
