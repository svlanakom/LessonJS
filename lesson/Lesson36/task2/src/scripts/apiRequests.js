export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

  if (!response.ok) {
    throw new Error("Failed to load data");
  }

  const result = await response.json();
  return result;
};

export const fetchRepositories = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to load data");
  }

  const result = await response.json();
  return result;
};
