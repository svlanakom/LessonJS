const getAdults = (obj) => {
  let newObj = {};
  for (let key in obj) {
    const el = obj[key];
    if (el >= 18) {
      newObj[key] = el;
    }
  }
  return newObj;
};

console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }));

getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
