// Read the file
let fs = require('fs');
const { get } = require('http');
let allFile = fs.readFileSync('input.txt').toString().split("\n");

// Create special 'theMatrix' object to visualize the input
let theMatrix = [];
allFile.forEach(line => {
    let theRowOfTheMatrix = [];
    for (let index = 0; index < line.length; index++) {
        let theBit = parseInt(line[index]);
        theRowOfTheMatrix.push(theBit);
    }
    theMatrix.push(theRowOfTheMatrix);
});

function getDecimalFromBinary(binary) {
    let multiplier = 1;
    let decimalValue = 0;
    for (let index = binary.length - 1; index >= 0; index--) {
        decimalValue += binary[index] * multiplier;
        multiplier *= 2;
    }
    return decimalValue;
}

part1 = () => {
    let theGammaBinary = [];
    let theEpsilonBinary = [];

    // Horizontal revision
    for (let x = 0; x < theMatrix[0].length; x++) {
        let theGammaBit = 0;
        let theEpsilonBit = 0;

        let countOfCero = 0;
        let countOfOne = 0;

        // Vertical revision
        for (let y = 0; y < theMatrix.length; y++) {
            if (theMatrix[y][x] == 0)
                countOfCero++;
            else
                countOfOne++;
        }

        // Review the most popular number
        if (countOfCero > countOfOne) {
            theGammaBit = 0;
            theEpsilonBit = 1;
        }
        else {
            theGammaBit = 1;
            theEpsilonBit = 0;
        }

        // Adding to Gamma and Epsilon corresponding bit
        theGammaBinary.push(theGammaBit);
        theEpsilonBinary.push(theEpsilonBit);
    }

    let theGamma = getDecimalFromBinary(theGammaBinary);
    let theEpsilon = getDecimalFromBinary(theEpsilonBinary);

    console.log(`The value for Gamma is: ${theGammaBinary} which corresponds to ${theGamma}`);
    console.log(`The value for Epsilon is: ${theEpsilonBinary} which corresponds to ${theEpsilon}`);
    console.log(`With a total power consumption of: ${theGamma * theEpsilon}`);
}

part1();
