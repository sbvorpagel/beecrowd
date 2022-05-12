const stringValues = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .split(/\n|\s/);

const bigger = (a, b) => (a + b + Math.abs(a - b)) / 2;

const searchBigger = (values = []) =>
  values.reduce((acc, value) => bigger(acc, parseInt(value || 0)), 0);

console.log(`${searchBigger(stringValues)} eh o maior`);
