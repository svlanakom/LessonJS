/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const mewMining = 10 ** prec;
  const newArr = [
    Math.floor(num * mewMining) / mewMining,
    Math.trunc(num * mewMining) / mewMining,
    Math.ceil(num * mewMining) / mewMining,
    Math.round(num * mewMining) / mewMining,
    Number(num.toFixed(prec)),
  ];
  return newArr;
};

console.log(superRound(6.11, 3));
superRound(11.12556, 2); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
