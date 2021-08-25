// const filterNames = (arr, text) =>
//   arr.filter((name) => name.includes(text) && name.length > 5);

// console.log(
//   filterNames(
//     ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya", "Sanya"],
//     "ya"
//   )
// );

const filterNames = (arr, text) =>
  arr.filter((el) => {
    if (el.includes(text) && el.length > 5) return arr;
  });

console.log(
  filterNames(
    ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya", "Sanya"],
    "ya"
  )
);
