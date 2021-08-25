const concatProps = (obj) => {
  let arr = [];
  for (let key in obj) {
    // arr.push(obj[key]);
    arr = arr.concat(obj[key]);
  }
  return arr;
};

console.log(concatProps({ name: "John Doe", age: 17, interest: "football" }));

// concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']

// const concatProps = (obj) => {
//   // put your code here
//   const resultArr = []; // creating array before cycle
//   for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//       const element = obj[key]; // mint be deleted, created for qality of life

//       resultArr.push(element); // adding element to array
//     }
//   }
//   return resultArr;
// };
