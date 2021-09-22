const obj = JSON.stringify({ name: "Alla" });

export const parseUser = (obj) => {
  try {
    return JSON.parse(obj);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(obj));
