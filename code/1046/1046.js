const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

console.log(`O JOGO DUROU ${a < b ? b-a : 24-a+b} HORA(S)`);
