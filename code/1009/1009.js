const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const base = parseFloat(lines[1]);
const sales = parseFloat(lines[2]);

const newSalary = base + (sales * 0.15);

console.log(`TOTAL = R\$ ${newSalary.toFixed(2)}`);
