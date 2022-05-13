const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const time = parseInt(lines[0]);
const average = parseInt(lines[1]);

console.log(((time * average) / 12.0).toFixed(3));
