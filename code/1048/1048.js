const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const salary = parseFloat(lines[0]);

let percente;

if (salary <= 400.0) {
  percente = 15.0;
} else if (salary <= 800.0) {
  percente = 12.0;
} else if (salary <= 1200.0) {
  percente = 10.0;
} else if (salary <= 2000.0) {
  percente = 7.0;
} else {
  percente = 4.0;
}

console.log(`Novo salario: ${(salary * (1 + percente / 100)).toFixed(2)}`);
console.log(`Reajuste ganho: ${(salary * (percente / 100)).toFixed(2)}`);
console.log(`Em percentual: ${percente.toFixed(0)} %`);
