const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const n1 = parseFloat(lines[0]) * 2;
const n2 = parseFloat(lines[1]) * 3;
const n3 = parseFloat(lines[2]) * 4;
const n4 = parseFloat(lines[3]);

const average = (n1 + n2 + n3 + n4) / 10;

console.log(`Media: ${average.toFixed(1)}`);

if (average < 5) {
  console.log("Aluno reprovado.");
} else if (average > 7) {
  console.log("Aluno aprovado.");
} else {
  const exam = parseFloat(lines[4]);
  console.log("Aluno em exame.");
  console.log(`Nota do exame: ${exam.toFixed(1)}`);
  console.log(
    (exam + average) / 2 < 5 ? "Aluno reprovado." : "Aluno aprovado."
  );
  console.log(`Media final: ${((exam + average) / 2).toFixed(1)}`);
}
