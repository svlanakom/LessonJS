// // eslint-disable-next-line consistent-return
// export const fetchUser = async (userId) => {
//   try {
//     const response = await fetch(`https://api.github.com/users${userId}`);
//     if (!response.ok || response.status === 404) {
//       return null;
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (err) {
//     throw new Error("Failed to fetch user");
//   }
// };

// fetchUser("facebook");
// //   .then((userData) => console.log(userData))
// //   .catch((err) => alert(err.message));

export const fetchUser = async (userId) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok || response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (e) {
    throw new Error(`Failed to fetch user`);
  }
};

// fetchUser("facebook").then((data) => console.log(data));
fetchUser("facebook");
