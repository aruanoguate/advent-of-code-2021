let fs = require('fs');
let allFile = fs.readFileSync('input.txt').toString().split("\n");

let previousLine;
let currentLine;


allFile.forEach(line => {
    previousLine = currentLine;
    currentLine = parseInt(line);
});