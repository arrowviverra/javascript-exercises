const convertToCelsius = function(input) {
  let result = (input-32)*(5/9);
  let resultRounded = Math.round(result * 10)/10;
  return resultRounded;
};
convertToCelsius();

const convertToFahrenheit = function(input) {
  let result = (input*(9/5)+32);
  let resultRounded = Math.round(result * 10)/10;
  return resultRounded;
};
convertToFahrenheit();
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
