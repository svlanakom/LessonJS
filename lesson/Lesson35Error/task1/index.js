// window.addEventListener("error", function onUnhandledError(err) {
//   console.error("error", err.message);
// });
window.addEventListener("error", (err) => {
  console.error("error", err.message);
});

let userParsingResult;
const usr = '{"name": "Tom"}';

try {
  const user = JSON.parse(usr);
  console.log("User data: ", user);
  userParsingResult = "success";
} catch (e) {
  userParsingResult = "error";
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;
const us = '{"name: "Tom"}';

try {
  const product = JSON.parse(us);
  console.log("Product data: ", product);
  productParsingResult = "success";
} catch (e) {
  productParsingResult = "error";
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
