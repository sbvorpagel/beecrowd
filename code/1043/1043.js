const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);

if (a + b > c && b + c > a && c + a > b) {
  console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
} else {
  console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);
}
