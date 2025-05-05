function sum(a, b) {
  return a + b;
}

function print(number) {
  return `X = ${number}`;
}

function readTwoNumbers() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  return { a: Number(lines[0]), b: Number(lines[1]) };
}

module.exports = { sum, print, resolve };

if (require.main === module) {
  const { a, b } = readTwoNumbers();
  const result = sum(a, b);
  console.log(print(result));
}
