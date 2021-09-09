// const numbersList = [5, 0, 8, 10, -4, 50, 220];

// console.log("nubberList before map", numbersList);

// // input func
// // output array

// // callback
// // input number index (optional),array (optional)
// // output number

// // option 1 map()
// const mapRes = numbersList.map(function (el, index, aaray) {
//   //   console.log(el);
//   //     console.log(index);
//   //     console.log(array);
//   return el * el;
// });
// // option2
// const mapRes = numbersList.map((el) => "my number " + el * el);

// console.log(mapRes);

// // Foreach
// // input callback, obj (optional)
// // output unerfined

// // callback
// // input number (index array) optional
// // output underfined

// console.log("numberList befor foreach ", numberList);

// const foreachRes = numbersList.forEach((el) => {
//   if (el > 0) {
//     console.log(el);
//   }
// });
// console.log(foreachRes);

// console.log("numberList after foreach", numbersList);

// // =====

// // Find
// // input callback
// // output number or underfined

// // callback
// // input number, (index, array) optional
// // output boolean

// // option 1
// // const findeRes = numbersList.find((el) => {
// //   if (el % 2 === 0 && el > 0) {
// //     return true;
// //   }
// //   return false;
// // });
// // console.log(findeRes);

// // option 2
// const findeRes = numbersList.find((el) => el % 2 === 0 && el > 0);
// console.log(findeRes);

// =====reduce
const transactions = [5, 11, 8, 10, -4, 50, 220, 1203, 556, 41];
// input callback number (acc initinal value) optional
// output number

// callback
// input acc (number),(index, array) optional
// output number

const reduceRes = transactions.reduce((acc, element, index) => {
  // console.log("step " + index + " acc is: " + acc + " element + " + element);
  acc += element;
  return acc;
});
console.log(reduceRes);
