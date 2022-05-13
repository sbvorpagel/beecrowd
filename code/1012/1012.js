const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const PI = 3.14159;

const A = parseFloat(lines[0]);
const B = parseFloat(lines[1]);
const C = parseFloat(lines[2]);

console.log(`TRIANGULO: ${((A * C) / 2.0).toFixed(3)}`);
console.log(`CIRCULO: ${(PI * (C * C)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((A + B) * C) / 2.0).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);
