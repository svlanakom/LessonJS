const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  const newArray = [];
  for (let i = 0; i < length; i += 1) {
    newArray.push(Math.round(Math.random() * (to - from) + from));
  }

  return newArray;
};

// examples

console.log(getRandomNumbers(5, 1.4, 3.22));
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
