// export const getDiff = (startDate, endDate) => {
//   let resultSeconds = 0;
//   if (startDate > endDate) {
//     resultSeconds = new Date(startDate - endDate) / 1000;
//   } else {
//     resultSeconds = new Date(endDate - startDate) / 1000;
//   }

//   console.log(
//     `${Math.floor(resultSeconds / 3600 / 24)}d ${
//       Math.floor(resultSeconds / 3600) % 24
//     }h ${Math.floor(resultSeconds / 60) % 60}m ${
//       Math.floor(resultSeconds) % 60
//     }s`
//   );
//   return `${Math.floor(resultSeconds / 3600 / 24)}d ${
//     Math.floor(resultSeconds / 3600) % 24
//   }h ${Math.floor(resultSeconds / 60) % 60}m ${
//     Math.floor(resultSeconds) % 60
//   }s`;
// };
// getDiff(
//   new Date(2012, 11, 3, 11, 21, 2, 0),
//   new Date(2011, 10, 2, 23, 11, 3, 0)
// );

const oneDate = new Date(Date.UTC23019, 10, 24, 20, 50, 34, 44);
const twoDate = new Date(Date.UTC23019, 1, 22, 17, 52, 18);
const Sec = 1000;
const Minute = 60 * Sec;
const Hour = 60 * Minute;
const Day = 24 * Hour;

const getDif = { startDate, endDate } => {
  const differentDate = Math.abs(startDate - endDate)

  const days = Math.floor(differentDate / Day);
  const hours = Math.floor((differentDate % Day) / Hour);
  const minutes = Math.floor((differentDate % Hour) / Minute);
  const seconds = Math.floor((differentDate % Minute) / Sec);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
};

const result = getDif(oneDate, twoDate);
console.log(result)
