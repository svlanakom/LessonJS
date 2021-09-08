export function getTitle() {
  const result = document.querySelector(".title").textContent;
  return result;
}

export function getDescription() {
  const result = document.querySelector(".about").innerText;
  return result;
}

export function getPlans() {
  const result = document.querySelector(".plans").innerHTML;
  return result;
}

export function getGoal() {
  const result = document.querySelector(".goal").outerHTML;
  return result;
}
