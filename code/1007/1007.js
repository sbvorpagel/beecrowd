const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const num1 = parseInt(lines[0]);
const num2 = parseInt(lines[1]);
const num3 = parseInt(lines[2]);
const num4 = parseInt(lines[3]);

console.log(`DIFERENCA = ${(num1 * num2) - (num3 * num4)}`);
