var readline = require('readline-sync');

var number1 = readline.question("Enter the first number: ");
var number2 = readline.question("Enter the second number: ");
var op = readline.question("Enter the operation(+,-,/,*): ")
var result;
switch (op) {
  case '+':
    result = parseFloat(number1) + parseFloat(number2);
    break;
  case '-':
    result = parseFloat(number1) - parseFloat(number2);
    break;
  case '*':
    result = parseFloat(number1) * parseFloat(number2);
    break;
  case '/':
    result = parseFloat(number1) / parseFloat(number2);
    break;
  default:
    result = parseFloat(number1) + parseFloat(number2);
}

console.log(number1 + " " + op + " " + number2 + " = " + result);
