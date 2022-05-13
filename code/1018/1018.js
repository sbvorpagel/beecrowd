const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const printAndCalcBanknotes = (quant, value) => {
  const actualQuant = Math.floor(quant / value);
  console.log(`${actualQuant} nota(s) de R\$ ${value},00`);
  return quant - (actualQuant * value);
}

let n = parseInt(lines[0]);

console.log(n);

n = printAndCalcBanknotes(n, 100);
n = printAndCalcBanknotes(n, 50);
n = printAndCalcBanknotes(n, 20);
n = printAndCalcBanknotes(n, 10);
n = printAndCalcBanknotes(n, 5);
n = printAndCalcBanknotes(n, 2);
printAndCalcBanknotes(n, 1);
