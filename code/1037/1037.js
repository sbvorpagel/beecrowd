const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const n = parseFloat(lines[0]);

if (n < 0 || n > 100) {
  console.log("Fora de intervalo");
} else {
  if (n <= 25) {
    console.log("Intervalo [0,25]");
  } else if (n <= 50) {
    console.log("Intervalo (25,50]");
  } else if (n <= 75) {
    console.log("Intervalo (50,75]");
  } else {
    console.log("Intervalo (75,100]");
  }
}
