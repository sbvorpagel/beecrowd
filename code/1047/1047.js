const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.split(/\n|\s/);

const initialHour = parseInt(lines[0]);
const initialMinute = parseInt(lines[1]);
const finalHour = parseInt(lines[2]);
const finalMinute = parseInt(lines[3]);

const initialTime = initialHour * 60 + initialMinute; 
const finalTime = finalHour * 60 + finalMinute;

let durationTime;

if (initialTime < finalTime) {
  durationTime = finalTime - initialTime;
} else {
  durationTime = (24 * 60) - initialTime + finalTime;
}

const durationHour = Math.floor(durationTime/60);
const durationMinute = durationTime % 60;

console.log(`O JOGO DUROU ${durationHour} HORA(S) E ${durationMinute} MINUTO(S)`);
