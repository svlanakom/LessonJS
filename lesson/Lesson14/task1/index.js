// let message = "Just learn it";

// function sendMessage(name) {
//   console.log(`${name}, ${message}! Your Gromcode`);
// }

// function setMessage(text) {
//   message = text;
// }
// sendMessage("Ann");
// setMessage("Good job");
// sendMessage("Ann");

// 'Ann, Just learn it! Your Gromcode'
// 'Ann, Good job! Your Gromcode'

let message = "Just learn it";
export const sendMessage = (name) => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = (text) => {
  message = text;
};
