const sumAll = function(input1, input2) {
    if (
        input1 < 0 || input2 < 0 || //check for negative numbers
        !Number.isInteger(input1) || !Number.isInteger(input2) || //check for integers
        typeof input1 !== "number" || typeof input2 !== "number" //check for numbers
    ) {
        return "ERROR";
    }
    
    let start, end;
    if (input1 > input2) {
        start = input2;
        end = input1;
    } else {
        start = input1;
        end = input2;
    }

    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

sumAll();
// Do not edit below this line
module.exports = sumAll;
