const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);
const C = parseInt(lines[2]);
const D = parseInt(lines[3]);

if (B > C && D > A && C + D > A + B && C >= 0 && D >= 0 && A % 2 === 0) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
