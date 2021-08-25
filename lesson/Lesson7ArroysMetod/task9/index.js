// const withdraw = (clients, balances, names, amount) => {
//   const result = 0;
//   clients.forEach((client, index) => {
//     if (client.includes(names) && balances[index] >= amount) {
//       result = balances[index] - amount;
//     } else if (client.includes(names) && balances[index] < amount) {
//       result = -1;
//     }
//   });
//   return result;
// };

// console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));

// example 1:

// input
// withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50);

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// const getNumber = (number) => number.filter((num) => num % 3 === 0);

// console.log(getNumber([2, 3, 8, 9]));

// function withdraw(clients, balances, client, amount) {
//   for (let i = 0; i <= 3; i++) {
//     if (client === clients[i]) {
//       if (balances[i] - amount > 0) {
//         balances[i] -= amount;
//         return balances[i];
//       } else {
//         return -1;
//       }
//     }
//   }
// }

const withdraw = (clients, balances, client, amount) => {
  for (let i = 0; i <= 3; i++) {
    if (client === clients[i]) {
      if (balances[i] - amount > 0) {
        balances[i] -= amount;
        return balances[i];
      } else {
        return -1;
      }
    }
  }
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));
