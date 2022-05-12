const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\s|\n/);

const quant1 = parseInt(lines[1]);
const quant2 = parseInt(lines[4]);

const value1 = parseFloat(lines[2]);
const value2 = parseFloat(lines[5]);

console.log(
  `VALOR A PAGAR: R\$ ${(quant1 * value1 + quant2 * value2).toFixed(2)}`
);
