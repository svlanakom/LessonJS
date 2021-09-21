const baseUr1 = "https://61488a44035b3600175b9eb9.mockapi.io/users";
function getUsersList() {
  return fetch(`${baseUr1}`).then((response) => response.json());
}

getUsersList().then((users) => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

function getUserById(userId) {
  return fetch(`${baseUr1}/${userId}`).then((response) => response.json());
}
getUserById("2").then((userData) => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

function createUser(userData) {
  return fetch(`${baseUr1}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

const newUserData = {
  email: "cool@email.com",
  firstName: "Iron",
  lastName: "Man",
  age: 42,
};

createUser(newUserData).then(() => {
  console.log("User created");
});

function updateUser(userId, userData) {
  return fetch(`${baseUr1}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  });
}

const updatedUserData = {
  email: "new@email.com",
  firstName: "John",
  lastName: "Doe",
  age: 17,
};

updateUser("1", updatedUserData).then(() => {
  console.log("User updated");
});

function deleteUser(userId) {
  return fetch(`${baseUr1}/${userId}`, {
    method: "DELETE",
  });
}

deleteUser("1").then(() => {
  console.log("User updated");
});
