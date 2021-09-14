export const getDiff = (startDate, endDate) => {
  let resultSeconds = 0;
  if (startDate > endDate) {
    resultSeconds = new Date(startDate - endDate) / 1000;
  } else {
    resultSeconds = new Date(endDate - startDate) / 1000;
  }

  console.log(
    `${Math.floor(resultSeconds / 3600 / 24)}d ${
      Math.floor(resultSeconds / 3600) % 24
    }h ${Math.floor(resultSeconds / 60) % 60}m ${
      Math.floor(resultSeconds) % 60
    }s`
  );
  return `${Math.floor(resultSeconds / 3600 / 24)}d ${
    Math.floor(resultSeconds / 3600) % 24
  }h ${Math.floor(resultSeconds / 60) % 60}m ${
    Math.floor(resultSeconds) % 60
  }s`;
};
getDiff(
  new Date(2012, 11, 3, 11, 21, 2, 0),
  new Date(2011, 10, 2, 23, 11, 3, 0)
);
