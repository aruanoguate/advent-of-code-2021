// Read the file
let fs = require('fs');
let allFile = fs.readFileSync('input.txt').toString().split("\n");

// Convert to an integers array
let allFileIntegers = [];
allFile.forEach(line => {
    allFileIntegers.push(parseInt(line));
});


firstPart = () => {
    let previousLine = Number.MAX_SAFE_INTEGER;
    let currentLine = Number.MAX_SAFE_INTEGER;
    let countOfIncreases = 0;


    allFileIntegers.forEach(line => {
        previousLine = currentLine;
        currentLine = line;

        if (currentLine > previousLine)
            countOfIncreases++;
    });

    console.log(`The count of increases is ${countOfIncreases}`);
}

firstPart();

secondPart = () => {
    let countOfIncreases = 0;

    let firstWindow = [0,0,0];
    let secondWindow = [0,0,0];

    let firstWindowSum = 0;
    let secondWindowSum = 0;


    for (let index = 3; index < allFileIntegers.length; index++) {
        firstWindow[0] = allFileIntegers[index - 3];
        firstWindow[1] = allFileIntegers[index - 2];
        firstWindow[2] = allFileIntegers[index - 1];

        secondWindow[0] = allFileIntegers[index - 2];
        secondWindow[1] = allFileIntegers[index - 1];
        secondWindow[2] = allFileIntegers[index];

        firstWindowSum = firstWindow.reduce((a, b) => a + b, 0);
        secondWindowSum = secondWindow.reduce((a, b) => a + b, 0);

        if (secondWindowSum > firstWindowSum)
            countOfIncreases++;
    }

    console.log(`The count of Window increases is ${countOfIncreases}`);
}

secondPart();

