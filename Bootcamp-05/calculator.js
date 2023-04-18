/* ------------------------
 Calculator
 -------------------------- */
let num1 = parseInt(prompt('Enter first number'));
let num2 = parseInt(prompt('Enter second number'));
let operator = window.prompt('Enter the opertaor');

function calculate(num1, num2, operator) {
  if (
    typeof num1 != 'number' ||
    typeof num2 != 'number' ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    console.log('Error!: enter a valid number');
  } else {
    switch (operator) {
      case '+':
        return num1 + num2;
        break;

      case '-':
        return num1 - num2;
        break;

      case '*':
        return num1 * num2;
        break;

      case '/':
        return num1 / num2;
        break;

      default:
        console.log('Error!: Enter a valid operator.');
        console.log(
          'Enter + for Addition \n Enter * for Multiplication \n Enter - for Subtraction \n Enter / for Division'
        );
    }
  }
}

let ans = calculate(num1, num2, operator);
if (ans != undefined) {
  console.log(`${num1} ${operator} ${num2} = ${ans}`);
}
