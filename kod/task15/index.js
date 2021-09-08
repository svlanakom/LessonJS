const listElem = document.querySelector(".list");

export const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  console.log("render");
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");

      checkbox.setAttribute("type", "checkbox");
      // checkbox.dataset.id = index;
      checkbox.setAttribute("data-id", index);
      checkbox.checked = done;

      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// 1. add event to the element
// 2. create event handlers

const createBtnElement = document.querySelector(".create-task-btn");
//  функция обработчик function onCreateTask(event)  принимает:
// input obj (event)
// output undefined
const inputElement = document.querySelector(".task-input");
//   console.dir(inputElement);

// algo
// 1. get data
// 2. create task obj, add to array
// 3. re-render

// WEB FLOW
// 1. get data +++
// 2. render ++++
// 3. update data, don't update DOM !
// 4. re-render

function onCreateTask(event) {
  //   console.log(event);

  // const { value } = inputElement;
  const value = inputElement.value;

  //   console.log(value);
  tasks.push({
    text: value,
    done: false,
  });

  renderTasks(tasks);
}

// input: string callback
// output underfined

createBtnElement.addEventListener("click", onCreateTask);

// //

// // 1. check if clicked checbox
// // 2. finde task where clicked
// // 3. update task
// // 4. re-render

// function updateTaskHandler(event) {
//   console.dir(event.target);
//   console.log(event.target.classList);

//   if (!event.target.classList.contains("list__item-checkbox")) {
//     return;
//   }
//   console.log("checkbox is clicked");
//   console.log(event.target.dataset.id);

//   // to do
// }
// listElem.addEventListener("click", updateTaskHandler);
