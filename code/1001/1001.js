const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");
const value = lines.reduce((acc, value) => acc + parseInt(value || 0), 0);

console.log(`X = ${value}`);
