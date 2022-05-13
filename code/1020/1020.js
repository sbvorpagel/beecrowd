const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines[0]);

const years = parseInt(n / 365);
const months = parseInt((n - (years * 365)) / 30);
const minutes = parseInt(n - (years * 365) - (months * 30));

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${minutes} dia(s)`);
