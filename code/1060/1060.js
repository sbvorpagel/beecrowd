const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

let sumOfPositiveNumbers = 0;

for (let i = 0; i < 6; i++) {
  if (parseFloat(lines[i]) >= 0) {
    sumOfPositiveNumbers += 1;
  }
}

console.log(`${sumOfPositiveNumbers} valores positivos`);
