const PI = 3.14159;

function ouputString(area) {
  return `A=${area.toFixed(4)}`;
}

function calculateArea(radius) {
  const area = PI * Math.pow(radius, 2);
  return Number(area.toFixed(4));
}

module.exports = { calculateArea, ouputString };

function readANumber() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  return Number(lines[0]);
}

if (require.main === module) {
  const radius = readANumber();
  const area = calculateArea(radius);
  const output = ouputString(area);
  console.log(output);
}
