export function sum(a: number, b: number): number {
  return a + b;
}

export function print(number: number): string {
  return `X = ${number}`;
}

function readTwoNumbers(): { a: number; b: number } {
  const input = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = input.split("\n");
  return { a: Number(lines[0]), b: Number(lines[1]) };
}

if (require.main === module) {
  const { a, b } = readTwoNumbers();
  const result = sum(a, b);
  console.log(print(result));
}
