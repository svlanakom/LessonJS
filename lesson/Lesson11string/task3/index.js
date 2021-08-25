function splitString(text, len = 10) {
  let newArr = [];
  let startPosition = 0;
  if (typeof text !== "string") {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    newArr.push(chunk[0] + chunk.slice(1));
    startPosition += len;
  }
  let lastElement = newArr[newArr.length - 1];
  while (lastElement.length < len) {
    lastElement += ".";
  }

  newArr[newArr.length - 1] = lastElement;
  return newArr;
}

console.log(splitString("tgrrf rgtrhtghyjnyhjgty gfgf"));
console.log(splitString("sfdjgfjhghj.kjb", 4));
console.log(splitString(44, 4));
