export function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);

  if (balances[indexOfPerson] < amount) {
    return -1;
  }
  // eslint-disable-next-line no-param-reassign
  balances[indexOfPerson] -= amount;
  return balances[indexOfPerson];
}

const clients = ["Denis", "Andrews", "Jack"];
const balances = [100, 80, 1000];
const client = "Jack";
const amount = 500;
console.log(withdraw(clients, balances, client, amount));
console.log(balances);

export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  return newArr.reverse();
}

// console.log(reverseArray([2, 6, 5, 9]));

export const getAdults = (obj) => {
  const newObj = {};
  // eslint-disable-next-line no-restricted-syntax
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    const el = obj[key];
    if (el >= 18) {
      newObj[key] = el;
    }
  }
  return newObj;
};

// console.log(getAdults({ "John Doe": 1, Tom: 1, Bob: 11 }));

// // examples
// getAdults({ "John Doe": 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
