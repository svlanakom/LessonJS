export const shmoment = (date) => {
  const resultDate = new Date(date);

  return {
    add(type, value) {
      switch (type) {
        case "years":
          resultDate.setFullYear(resultDate.getFullYear() + value);
          return this;
        case "months":
          resultDate.setMonth(resultDate.getMonth() + value);
          return this;
        case "days":
          resultDate.setDate(resultDate.getDate() + value);
          return this;
        case "hours":
          resultDate.setHours(resultDate.getHours() + value);
          return this;
        case "minutes":
          resultDate.setMinutes(resultDate.getMinutes() + value);
          return this;
        case "seconds":
          resultDate.setSeconds(resultDate.getSeconds() + value);
          return this;
        case "milliseconds":
          resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
          return this;
        default:
          return null;
      }
    },
    subtract(type, value) {
      switch (type) {
        case "years":
          resultDate.setFullYear(resultDate.getFullYear() - value);
          return this;
        case "months":
          resultDate.setMonth(resultDate.getMonth() - value);
          return this;
        case "days":
          resultDate.setDate(resultDate.getDate() - value);
          return this;
        case "hours":
          resultDate.setHours(resultDate.getHours() - value);
          return this;
        case "minutes":
          resultDate.setMinutes(resultDate.getMinutes() - value);
          return this;
        case "seconds":
          resultDate.setSeconds(resultDate.getSeconds() - value);
          return this;
        case "milliseconds":
          resultDate.setMilliseconds(resultDate.getMilliseconds() - value);
          return this;
        default:
          return null;
      }
    },
    result() {
      return resultDate;
    },
  };
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add("minutes", 2)
  .add("days", 8)
  .subtract("years", 1)
  .result(); // ... Jan 15 2019 17:19:17
console.log(result);
