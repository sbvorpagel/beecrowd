const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = 3.14159;
const R = parseFloat(lines[0]);

const A = n * (R*R)

const roundNumber = ((Math.round(A*10000))/10000).toString().split('.');

console.log(`A=${roundNumber[0]}.${roundNumber[1].padEnd(4, "0")}`);
