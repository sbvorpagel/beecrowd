const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split("\n");

const mdc = (a, b) => {
  if (b === 0) return a;
  return mdc(b, a % b);
};

const sum2fraction = (fraction1, fraction2) => {
  const denominator = fraction1[1] * fraction2[1];
  const numerator =
    (denominator / fraction1[1]) * fraction1[0] +
    (denominator / fraction2[1]) * fraction2[0];

  return [numerator, denominator];
};

const sub2fraction = (fraction1, fraction2) => {
  const denominator = fraction1[1] * fraction2[1];
  const numerator =
    (denominator / fraction1[1]) * fraction1[0] -
    (denominator / fraction2[1]) * fraction2[0];

  return [numerator, denominator];
};

const mul2fraction = (fraction1, fraction2) => {
  const denominator = fraction1[1] * fraction2[1];
  const numerator = fraction1[0] * fraction2[0];

  return [numerator, denominator];
};

const div2fraction = (fraction1, fraction2) => {
  const denominator = fraction1[1] * fraction2[0];
  const numerator = fraction1[0] * fraction2[1];

  return [numerator, denominator];
};

const simplifyFraction = (a, b) => {
  const div = mdc(Math.abs(a), b);
  return [a / div, b / div];
};

const printFractions = (fraction, simplifyFraction) => {
  console.log(
    `${fraction[0]}/${fraction[1]} = ${simplifyFraction[0]}/${simplifyFraction[1]}`
  );
};

for (let i = 1; i < lines.length - 1; i++) {
  const entry = lines[i].split(" ");
  let fraction;

  if (entry[3] === "+") {
    fraction = sum2fraction(
      [parseInt(entry[0]), parseInt(entry[2])],
      [parseInt(entry[4]), parseInt(entry[6])]
    );
  }
  if (entry[3] === "-") {
    fraction = sub2fraction(
      [parseInt(entry[0]), parseInt(entry[2])],
      [parseInt(entry[4]), parseInt(entry[6])]
    );
  }
  if (entry[3] === "/") {
    fraction = div2fraction(
      [parseInt(entry[0]), parseInt(entry[2])],
      [parseInt(entry[4]), parseInt(entry[6])]
    );
  }
  if (entry[3] === "*") {
    fraction = mul2fraction(
      [parseInt(entry[0]), parseInt(entry[2])],
      [parseInt(entry[4]), parseInt(entry[6])]
    );
  }

  const simplifiedFraction = simplifyFraction(fraction[0], fraction[1]);

  printFractions(fraction, simplifiedFraction);
}
