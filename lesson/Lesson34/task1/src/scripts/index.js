import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

// eslint-disable-next-line consistent-return
const onStorageChange = (e) => {
  console.log(e);
  if (e.key !== "tasksList") {
    return null;
  }
  renderTasks();
};

window.addEventListener("storage", onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
// 3.
