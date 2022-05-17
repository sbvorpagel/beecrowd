const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const numbers = lines.filter((l) => !!l).map((l) => parseInt(l));

numbers
  .slice()
  .sort((a, b) => a - b)
  .forEach((n) => console.log(n));
console.log();
numbers.forEach((n) => console.log(n));
