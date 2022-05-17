const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const x = parseFloat(lines[0]);
const y = parseFloat(lines[1]);

if (x === 0 && y === 0) {
  console.log("Origem");
} else if (x === 0) {
  console.log("Eixo Y");
} else if (y === 0) {
  console.log("Eixo X");
} else if (x > 0 && y > 0) {
  console.log("Q1");
} else if (x > 0 && y < 0) {
  console.log("Q4");
} else if (x < 0 && y > 0) {
  console.log("Q2");
} else {
  console.log("Q3");
}
