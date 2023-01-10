const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const day1 = parseInt(lines[1]);
const day2 = parseInt(lines[8]);
const hour1 = parseInt(lines[2]);
const hour2 = parseInt(lines[9]);
const minute1 = parseInt(lines[4]);
const minute2 = parseInt(lines[11]);
const seccond1 = parseInt(lines[6]);
const seccond2 = parseInt(lines[13]);

const firstTtimeInSecconds =
  day1 * 24 * 60 * 60 + hour1 * 60 * 60 + minute1 * 60 + seccond1;
const seccondTtimeInSecconds =
  day2 * 24 * 60 * 60 + hour2 * 60 * 60 + minute2 * 60 + seccond2;

const diffTime = seccondTtimeInSecconds - firstTtimeInSecconds;

const day = Math.floor(diffTime / (24 * 60 * 60));
const dayInSeccond = day * (24 * 60 * 60);

const hour = Math.floor((diffTime - dayInSeccond) / (60 * 60));
const hourInSeccond = hour * (60 * 60);

const minute = Math.floor((diffTime - dayInSeccond - hourInSeccond) / 60);
const minuteInSeccond = minute * 60;

const seccond = diffTime - dayInSeccond - hourInSeccond - minuteInSeccond;

console.log(`${day} dia(s)`);
console.log(`${hour} hora(s)`);
console.log(`${minute} minuto(s)`);
console.log(`${seccond} segundo(s)`);
