export const getDiff = (startDate, endDate) =>
  (startDate - endDate) / (60 * 60 * 24 * 1000);

getDiff(new Date(2019, 11, 5), new Date(2016, 10, 5));
