firstPart = () => {
    let fs = require('fs');
    let allFile = fs.readFileSync('input.txt').toString().split("\n");
    
    let previousLine = Number.MAX_SAFE_INTEGER;
    let currentLine = Number.MAX_SAFE_INTEGER;
    let countOfIncreases = 0;
    
    
    allFile.forEach(line => {
        previousLine = currentLine;
        currentLine = parseInt(line);
    
        if (currentLine>previousLine)
            countOfIncreases++;
    });
    
    console.log(`The count of increases is ${countOfIncreases}`);
}

firstPart();


