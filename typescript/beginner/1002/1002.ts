const PI = 3.14159;

export function ouputString(area: number): string {
  return `A=${area.toFixed(4)}`;
}

export function calculateArea(radius: number): number {
  const area = PI * Math.pow(radius, 2);
  return Number(area.toFixed(4));
}

function readANumber(): number {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  return Number(lines[0]);
}

if (require.main === module) {
  const radius = readANumber();
  const area = calculateArea(radius);
  const output = ouputString(area);
  console.log(output);
}
