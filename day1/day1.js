// Read the file
let fs = require('fs');
let allFile = fs.readFileSync('input.txt').toString().split("\n");

// Convert to an integers array
let allFileIntegers = [];
allFile.forEach( line => {
    allFileIntegers.push(parseInt(line));
});


firstPart = () => {    
    let previousLine = Number.MAX_SAFE_INTEGER;
    let currentLine = Number.MAX_SAFE_INTEGER;
    let countOfIncreases = 0;
    
    
    allFileIntegers.forEach(line => {
        previousLine = currentLine;
        currentLine = line;
    
        if (currentLine>previousLine)
            countOfIncreases++;
    });
    
    console.log(`The count of increases is ${countOfIncreases}`);
}

firstPart();

// secondPart = () => {


//     let firstWindow = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
//     let secondWindow = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];   
// }

