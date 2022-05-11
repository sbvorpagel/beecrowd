const roundFormatted = (number, precision) => {
  const powPrecision = Math.pow(10, precision);
  const roundNumber = (Math.round(number * powPrecision) / powPrecision)
    .toString()
    .split(".");

  return `${roundNumber[0]}.${(roundNumber[1] || "").padEnd(precision, "0")}`;
};

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const emp = parseInt(lines[0]);
const hours = parseInt(lines[1]);
const salary = parseFloat(lines[2]);

console.log(`NUMBER = ${emp}`);
console.log(`SALARY = U\$ ${roundFormatted(hours * salary, 2)}`)
