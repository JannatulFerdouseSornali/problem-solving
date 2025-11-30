// Compact version for copy-paste into online judges
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
    if (lines.length === 4) {
        const n = parseInt(lines[0]);
        const k = parseInt(lines[1]);
        const m = parseInt(lines[2]);
        const lengths = lines[3].split(' ').map(Number);
        
        lengths.sort((a, b) => a - b);
        
        let totalLength = 0;
        let count = 0;
        
        for (let length of lengths) {
            if (k * (totalLength + length) <= m * (count + 1)) {
                totalLength += length;
                count++;
            }
        }
        
        console.log(count);
        rl.close();
    }
});