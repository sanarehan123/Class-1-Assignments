"use strict";
const grayLine = (message, result) => {
    console.log('\x1b[1m\x1b[37m%s\x1b[0m', '------------------------');
    console.log('\x1b[1m\x1b[37m%s\x1b[0m', message + ': ' + result);
    console.log('\x1b[1m\x1b[37m%s\x1b[0m', '------------------------');
};
const additionResult = 5 + 3;
grayLine('Addition', additionResult);
const subtractionResult = 10 - 2;
grayLine('Subtraction', subtractionResult);
const multiplicationResult = 4 * 2;
grayLine('Multiplication', multiplicationResult);
const divisionResult = 16 / 2;
grayLine('Division', divisionResult);
