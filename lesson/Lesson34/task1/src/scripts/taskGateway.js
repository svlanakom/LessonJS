const baseUrl = "https://61488a44035b3600175b9eb9.mockapi.io/FFF"; // link to tasksList API

export const getTasksList = () =>
  fetch(baseUrl).then((response) => response.json()); // from this promise we getting array of tasks (objects)

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });
export const updateTask = (id, value) =>
  fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(value),
  });
