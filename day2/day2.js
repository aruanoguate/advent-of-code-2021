// Read the file
let fs = require('fs');
let allFile = fs.readFileSync('input.txt').toString().split("\n");

// Create special 'instruction' object and respective array
let instructions = [];
allFile.forEach(line => {
    let splitLine = line.split(" ");
    let instruction = {
        direction: splitLine[0],
        distance: parseInt(splitLine[1])
    };
    instructions.push(instruction);
});

part1 = () => {
    horizontalPosition = 0;
    depthPosition = 0;

    instructions.forEach(instruction => {
        switch (instruction.direction) {
            case "forward":
                horizontalPosition += instruction.distance;
                break;
            case "up":
                depthPosition -= instruction.distance;
                break;
            case "down":
                depthPosition += instruction.distance;
                break;
        }
    });

    console.log(`The final position is:`);
    console.log(`\tHorizontal: ${horizontalPosition}`);
    console.log(`\tDepth: ${depthPosition}`);
    console.log(`The final answer is: ${depthPosition * horizontalPosition}`);
}

part1();