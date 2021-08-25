// export const getSquaredArray = (arr) => {
//   arr.map((num) => num * num);
// };

// export const getOddNumbers = (arr) => {
//   arr.filter((num) => (num % 2 === 1) {

//   });
// };

// export default function (a, b) {
//   return a + b;
// }

export const getSquaredArray = (array) => array.map((el) => el * el);

export const getOddNumbers = (array) => array.filter((el) => el % 2 === 1);

export default (firstNum, secondNumb) => firstNum + secondNumb;
