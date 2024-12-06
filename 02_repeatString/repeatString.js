const repeatString = function(string, num) {
    if (num <= -1) {
        return "ERROR";
    } else {
        for (i = 0; i <= num; i++) {
            let result = string.repeat(num);
            return result;
        }
    }
};

repeatString();
// Do not edit below this line
module.exports = repeatString;
