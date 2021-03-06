function splitText(text, len = 10) {
  let strArr = [];
  let startPosition = 0;
  if (typeof text !== "string") {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join("\n");
}

console.log(splitText("ffdsf", 3));
console.log(splitText("srgsdfghfghfdsf", 10));
console.log(splitText(54, 2));
