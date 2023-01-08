const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const word1 = lines[0];
const word2 = lines[1];
const word3 = lines[2];

const animalsHash = {
  vertebrado: {
    ave: {
      carnivoro: "aguia",
      herbivoro: "vaca",
    },
    mamifero: {
      onivoro: "homem",
      herbivoro: "vaca",
    },
  },
  invertebrado: {
    inseto: {
      hematofago: "pulga",
      herbivoro: "lagarta",
    },
    anelideo: {
      hematofago: "sanguessuga",
      onivoro: "minhoca",
    },
  },
};

console.log(animalsHash[word1][word2][word3]);
