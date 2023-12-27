const input = require("fs").readFileSync("/dev/stdin", "utf8");

const lines = input.split("\n");

let registers = [];
let mapRegisters = {}
let amountOfProperties = 0;
let count = 1;

lines.forEach((line) => {
   const stringNumbers = line.split(" ");

    if (stringNumbers.length === 1) {
        if (amountOfProperties) {
            console.log(`Cidade# ${count++}:`);
            const totalAverage = 
                (parseInt((registers.reduce((acc, curr) => 
                    acc + curr.totalConsumption, 0) /
                registers.reduce((acc, curr) =>
                    acc + curr.numberOfResidents, 0)) * 100) / 100).toFixed(2);

            const mapKeys = Object.keys(mapRegisters);
        
            const stringToPrint = mapKeys
                .sort((a, b) => parseInt(a) - parseInt(b))
                .reduce((acc, curr) => acc + mapRegisters[curr] + "-" + curr + " " , '')
                .trim();

            console.log(stringToPrint);
            console.log(`Consumo medio: ${totalAverage} m3.`)
        }

        amountOfProperties = parseInt(stringNumbers[0]);

        if (amountOfProperties) {
            registers = [];
            mapRegisters = {};
            if (count > 1) {
                console.log();
            }
        }
    } else {
        const numberOfResidents = parseInt(stringNumbers[0]);
        const totalConsumption = parseInt(stringNumbers[1]);
        const average = Math.floor(totalConsumption / numberOfResidents);
        if (mapRegisters[average]) {
            mapRegisters[average] += numberOfResidents;
        } else {
            mapRegisters[average] = numberOfResidents;
        }
        registers.push({ numberOfResidents, totalConsumption, average });
    }
});
