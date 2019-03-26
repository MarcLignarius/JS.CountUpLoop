var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter another number: "));

var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
	return number1 - number2;
};
var multiply = function(number1, number2) {
	return number1 * number2;
};
var divide = function(number1, number2) {
	return number1 / number2;
};

alert("The result of " + number1 + " plus " +  number2 + " is " + add(number1, number2));
alert("The result of " + number1 + " minus " +  number2 + " is " + subtract(number1, number2));
alert("The result of " + number1 + " multiplied by " +  number2 + " is " + multiply(number1, number2));
alert("The result of " + number1 + " divided by " +  number2 + " is " + divide(number1, number2));
