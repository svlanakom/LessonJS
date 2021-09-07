// input number
// output number

// 1 check if there is an argument(если аргумент не передан, возвращаем пустой массив)
// 2 если передано не число, возварщаем null
// 3 iteration array
//
//

const createArrayOfFunctions = (number) => {
  const resultArr = [];

  if (number === undefined) {
    return resultArr;
  }
  if (typeof number !== "number") {
    return null;
  }
  for (let i = 0; i < number; i += 1) {
    resultArr[i] = function () {
      return i;
    };
  }
  return resultArr;
};

console.log(createArrayOfFunctions(9)[5]());
