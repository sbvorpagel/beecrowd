const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const salary = parseFloat(lines[0]);

let percente;

if (salary <= 400.00) {
  percente = 15.00;
} else if (salary <= 800.00) {
  percente = 12.00;
} else if (salary <= 1200.00) {
  percente = 10.00;
} else if (salary <= 2000.00) {
  percente = 7.00;
} else {
  percente = 4.00;
}

console.log(`Novo salario: ${(salary * (1 + (percente / 100))).toFixed((2))}`)
console.log(`Reajuste ganho: ${(salary * (percente / 100)).toFixed((2))}`)
console.log(`Em percentual: ${percente.toFixed(0)} %`)
