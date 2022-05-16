const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

const delta = B * B - 4 * A * C;

if (delta < 0 || A == 0) {
  console.log("Impossivel calcular");
} else {
  r1 = (-B + Math.sqrt(delta)) / (2 * A);
  r2 = (-B - Math.sqrt(delta)) / (2 * A);

  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}
