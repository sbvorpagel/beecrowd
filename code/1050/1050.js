const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const ddd = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

if (!ddd[lines[0]]) {
  console.log("DDD nao cadastrado");
} else {
  console.log(ddd[lines[0]]);
}
