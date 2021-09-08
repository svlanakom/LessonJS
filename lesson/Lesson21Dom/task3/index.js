export function getItemList() {
  const elementList = document.querySelectorAll(".technology");
  console.dir(elementList);
  return elementList;
}
getItemList();

export function getItemsArray() {
  const elementsArray = Array.from(document.querySelectorAll(".tool"));
  console.dir(elementsArray);
  return elementsArray;
}
getItemsArray();
