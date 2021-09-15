localStorage.clear();
localStorage.setItem("age", JSON.stringify(11));
localStorage.setItem("name", JSON.stringify("ann"));
localStorage.setItem("object", JSON.stringify({ name: "3" }));

const getLocalStorageData = () =>
  Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});

console.log(getLocalStorageData());
