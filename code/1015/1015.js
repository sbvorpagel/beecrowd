const input = require("fs").readFileSync("/dev/stdin", "utf8");
const values = input.split(/\n|\s/);

const x1 = parseFloat(values[0]);
const y1 = parseFloat(values[1]);
const x2 = parseFloat(values[2]);
const y2 = parseFloat(values[3]);

console.log(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4));
