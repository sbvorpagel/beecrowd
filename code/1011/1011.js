const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const PI = 3.14159;
const r = parseFloat(lines[0]);

console.log(`VOLUME = ${((4.0 / 3.0) * PI * Math.pow(r, 3)).toFixed(3)}`);
