// const calc = (expression) => {
//   const [a, operator, b] = expression.split(" ");
//   let result;

//   switch (operator) {
//     case "+":
//       result = Number(a) + Number(b);
//       break;
//     case "-":
//       result = Number(a) - Number(b);
//       break;
//     case "*":
//       result = Number(a) * Number(b);
//       break;
//     case "/":
//       result = Number(a) / Number(b);
//       break;
//   }
//   return `${expression} = ${result}`;
// };
// console.log(calc("1 + 2"));

const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result;
  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
  }
  return `${expression} = ${result}`;
};
console.log(calc("1 + 2"));
