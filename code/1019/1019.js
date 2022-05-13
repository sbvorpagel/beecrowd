const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const n = parseInt(lines[0]);

const hours = parseInt(n / 3600);
const minutes = parseInt((n - (hours * 3600)) / 60);
const seconds = parseInt(n - (hours * 3600) - (minutes * 60));

console.log(`${hours}:${minutes}:${seconds}`);
