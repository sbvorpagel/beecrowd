const DDD_CODES_MAP = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

function getCityByDDD(ddd) {
  return DDD_CODES_MAP[ddd];
}

function makeOutput(city) {
  if (city) {
    return city;
  }
  return "DDD nao cadastrado";
}

module.exports = { getCityByDDD, makeOutput };

function readAString() {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  return lines[0];
}

if (require.main === module) {
  const key = readAString();
  const city = getCityByDDD(key);
  const output = makeOutput(city);
  console.log(output);
}
