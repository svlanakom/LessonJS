localStorage.clear();
// localStorage.setItem("nUUmber", JSON.stringify(11));
// localStorage.setItem("string", JSON.stringify("ann"));
// localStorage.setItem("NULL", JSON.stringify(null));
// localStorage.setItem("obj", JSON.stringify({ name: "12" }));

export const getLocalStorageData = () =>
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
