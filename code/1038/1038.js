const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const prices = [4, 4.5, 5, 2, 1.5];

const productCode = parseInt(lines[0]);
const quantity = parseInt(lines[1]);

console.log(`Total: R\$ ${(prices[productCode - 1] * quantity).toFixed(2)}`);
