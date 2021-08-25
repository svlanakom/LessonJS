// const transformToObject = (arr) => {
//   let rv = {};
//   for (let i = 0; i < arr.lenght; ++i) rv[i] = arr[i];
//   return rv;
// };

const transformToObject = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });

  return obj;
};

// examples

// const transformToObject = (arr) => {
//   let obj = arr.reduce((acc, el, i) => {
//     acc[i] = el;
//     return acc;
//   }, {});
//   return obj;
// };

console.log(transformToObject(["a", 17.1, "John Doe"]));
// ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
