export const getDiff = (startDate, endDate) => {
  let resultSeconds = 0;
  if (startDate > endDate) {
    resultSeconds = new Date(startDate - endDate) / (60 * 60 * 24 * 1000);
  } else {
    resultSeconds = new Date(endDate - startDate) / (60 * 60 * 24 * 1000);
  }
};

getDiff(new Date(2019, 11, 5), new Date(2016, 10, 5));
