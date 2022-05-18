const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

if (a % b === 0 || b % a === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
