const DDD_CODES_MAP = {
  "61": "Brasilia",
  "71": "Salvador",
  "11": "Sao Paulo",
  "21": "Rio de Janeiro",
  "32": "Juiz de Fora",
  "19": "Campinas",
  "27": "Vitoria",
  "31": "Belo Horizonte",
};

export function getCityByDDD(ddd: string): string {
  return DDD_CODES_MAP[ddd];
}

export function makeOutput(city?: string): string {
  if (city) {
    return city;
  }
  return "DDD nao cadastrado";
}

function readAString() : string {
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
