const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const num1 = parseFloat(lines[0]);
const num2 = parseFloat(lines[1]);

const num1_weight = 3.5
const num2_weight = 7.5

const average = (num1 * num1_weight + num2 * num2_weight) / (num1_weight + num2_weight);

const roundNumber = ((Math.round(average * 100000)) / 100000).toString().split('.');

console.log(`MEDIA = ${roundNumber[0]}.${(roundNumber[1] || '').padEnd(5, "0")}`);



