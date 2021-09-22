const obj = JSON.stringify({ name: "Alla" });

export const parseUser = (data) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
};

console.log(parseUser(obj));
