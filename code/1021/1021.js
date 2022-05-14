const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const printAndCalcBanknotes = (quant, value) => {
  const actualQuant = Math.floor(quant / value);
  console.log(`${actualQuant} nota(s) de R\$ ${value}.00`);
  return quant - actualQuant * value;
};

const printAndCalcCoins = (quant, coins) => {
  const actualQuant = Math.floor(quant.toFixed(2) / coins);
  console.log(`${actualQuant} moeda(s) de R\$ ${coins.toFixed(2)}`);
  return quant - (actualQuant * coins);
};

let n = parseFloat(lines[0]);

console.log("NOTAS:");

n = printAndCalcBanknotes(n, 100);
n = printAndCalcBanknotes(n, 50);
n = printAndCalcBanknotes(n, 20);
n = printAndCalcBanknotes(n, 10);
n = printAndCalcBanknotes(n, 5);
n = printAndCalcBanknotes(n, 2);


console.log("MOEDAS:")
n = printAndCalcCoins(n, 1.00);
n = printAndCalcCoins(n, 0.50);
n = printAndCalcCoins(n, 0.25);
n = printAndCalcCoins(n, 0.10);
n = printAndCalcCoins(n, 0.05);
printAndCalcCoins(n, 0.01);
