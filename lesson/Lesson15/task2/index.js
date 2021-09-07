// const createCalculator = () => {
//   let result = 0;
//   const add = (number) => (result = number + result);
//   const decrease = (number) => (result -= number);
//   const reset = () => (result = 0);
//   const getMemo = () => result;
//   return {
//     add,
//     decrease,
//     reset,
//     getMemo,
//   };
// };

const createCalculator = () => {
  let result = 0;
  function add(number) {
    return number + result;
  }
  function decrease(number) {
    // eslint-disable-next-line no-return-assign
    return (result -= number);
  }
  function reset() {
    result = 0;
    return result;
  }
  function getMemo() {
    return result;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const counter1 = createCalculator();
console.log(counter1.add(2)); // 2

const counter2 = createCalculator();
console.log(counter2.decrease(2)); // -2

const counter3 = createCalculator();
console.log(counter3.reset(2)); // 0

const counter4 = createCalculator();
console.log(counter4.getMemo(2)); // 0
