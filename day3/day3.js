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

function filterMatrix(aMatrix, columnToReview, mostOrLeastCommon) {
    let countOfCero = 0;
    let countOfOne = 0;

    // Vertical revision
    for (let y = 0; y < aMatrix.length; y++) {
        if (aMatrix[y][columnToReview] == 0)
            countOfCero++;
        else
            countOfOne++;
    }

    // Detemine the number that should be used for the filtering
    let numberToRemain = 0;
    if (mostOrLeastCommon == "most") {
        if (countOfOne > countOfCero || countOfOne == countOfCero)
            numberToRemain = 1
        else
            numberToRemain = 0;
    }
    else {
        if (countOfOne > countOfCero || countOfOne == countOfCero)
            numberToRemain = 0
        else
            numberToRemain = 1;
    }

    // Create a brand new matrix only with the rows matching the filtering pattern
    let aNewMatrix = [];
    aMatrix.forEach(aMatrixRow => {
        if (aMatrixRow[columnToReview] == numberToRemain)
            aNewMatrix.push(aMatrixRow);
    });

    return aNewMatrix;
}

part2 = () => {

    // Reduce the matrix to get the Oxigen Generator
    let columnToReview = 0;
    let theOxigenGeneratorOptions = theMatrix;
    while (theOxigenGeneratorOptions.length > 1) {
        theOxigenGeneratorOptions = filterMatrix(theOxigenGeneratorOptions, columnToReview, "most");
        columnToReview++;
    }

    // Repeat the process for the CO2 scrubber
    columnToReview = 0;
    let theCO2scrubberOptions = theMatrix;
    while (theCO2scrubberOptions.length > 1) {
        theCO2scrubberOptions = filterMatrix(theCO2scrubberOptions, columnToReview, "least");
        columnToReview++;
    }

    // Get the final results and their decimal representation
    let theOxigenGeneratorBinary = theOxigenGeneratorOptions[0];
    let theCO2scrubberBinary = theCO2scrubberOptions[0];

    let theOxigenGenerator = getDecimalFromBinary(theOxigenGeneratorBinary);
    let theCO2scrubber = getDecimalFromBinary(theCO2scrubberBinary);

    // Print the results
    console.log(`The value for oxygen generator rating is: ${theOxigenGeneratorBinary} which corresponds to ${theOxigenGenerator}`);
    console.log(`The value for CO2 scrubber rating is: ${theCO2scrubberBinary} which corresponds to ${theCO2scrubber}`);
    console.log(`With a total life support rating of: ${theOxigenGenerator * theCO2scrubber}`);
}

part2();