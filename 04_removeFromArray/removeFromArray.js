const removeFromArray = function(array, ...nums) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (!nums.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

removeFromArray([],);
// Do not edit below this line
module.exports = removeFromArray;
