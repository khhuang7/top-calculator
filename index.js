// Add functions to perform basic operations given two numbers and the operator
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a;
let operator;
let b;

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      alert("Invalid operator");
  }
}

// console.log(operate(1, '+', 200));
// console.log(operate(300, '-', 5));
// console.log(operate(5, '*', 7));
// console.log(operate(73, '/', 12));