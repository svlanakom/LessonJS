const contakts = [
  { name: "Bob", phoneNumber: "333-33-55" },
  { name: "Endru", phoneNumber: "356-53-55" },
  { name: "Mark", phoneNumber: "556-44-33" },
];

function sortContacts(array, isAsk = true) {
  if (!Array.isArray(array)) {
    return null;
  }
  return array.sort((a, b) => {
    if (isAsk) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
}

console.log(sortContacts(contakts, true));
console.log(sortContacts(contakts, false));
