const roundFormatted = (number, precision) => {
  const powPrecision = Math.pow(10, precision);
  const roundNumber = (Math.round(number * powPrecision) / powPrecision)
    .toString()
    .split(".");

  return `${roundNumber[0]}.${(roundNumber[1] || "").padEnd(precision, "0")}`;
};

const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const num1 = parseFloat(lines[0]);
const num2 = parseFloat(lines[1]);
const num3 = parseFloat(lines[2]);

const num1_weight = 2;
const num2_weight = 3;
const num3_weight = 5;

const average =
  (num1 * num1_weight + num2 * num2_weight + num3 * num3_weight) /
  (num1_weight + num2_weight + num3_weight);

console.log(`MEDIA = ${roundFormatted(average, 1)}`);
