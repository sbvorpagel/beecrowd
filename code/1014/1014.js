const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const values = input.split(/\n|\s/);

console.log(`${(parseInt(values[0]) / parseFloat(values[1])).toFixed(3)} km/l`);
