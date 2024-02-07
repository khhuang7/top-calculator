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
  if (b === 0) {
    alert ("Only Chuck Norris can divide by zero!");
    return 0;
  }

  return a / b;
}

let a = '';
let operator = '';
let b = '';

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      alert("Invalid operator");
  }
}

// console.log(operate(1, '+', 200));
// console.log(operate(300, '-', 5));
// console.log(operate(5, '*', 7));
// console.log(operate(73, '/', 12));

// Update display and saved values when numbers are pressed
const display = document.querySelector("#display");
display.textContent = '0';

function displayNumber() {
  const num = this.textContent;
  if (a === '') {
    display.textContent = num;
    a += num;
  } else {
    display.textContent += num;
    if (operator === '') {
      a += num;
    } else {
      b += num;
    }
  }
  console.log(`a: ${a} operator: ${operator} b: ${b}`)
}

const numBtns = document.querySelectorAll(".digit");
numBtns.forEach((button) => button.addEventListener('click', displayNumber));

// Update display and saved values when decimal is pressed
const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener('click', displayDecimal);

function displayDecimal() {
  if (a === '') {
    display.textContent = '0.';
    a += '.';
  } else {
    if (operator === '') {
      a += '.';
      display.textContent += '.';
    } else {
      display.textContent = (b === '') 
      ? display.textContent + '0.' 
      : display.textContent + '.';
      b += '.';
    }
  }
  decimalBtn.disabled = true;
  console.log(`a: ${a} operator: ${operator} b: ${b}`)
}

// Update and display saved values when operator is pressed. If an operation was pending calculation, do the calculation first.
function displayOperator() {
  if (!isNaN(display.textContent)) a = display.textContent;
  console.log(`a: ${a}`);

  while (operator !== '') {
    calculate();
    a = display.textContent;
  }

  const op = this.textContent;
  display.textContent += op;
  decimalBtn.disabled = false;

  switch (op) {
    case '÷':
      operator = 'divide';
      break;
    case '×':
      operator = 'multiply';
        break;
    case '−':
      operator = 'subtract';
      break;
    case '+':
      operator = 'add';
      break;
  }

  console.log(`a: ${a} operator: ${operator} b: ${b}`)
}

const opBtns = document.querySelector(".operations").querySelectorAll("button");
opBtns.forEach((button => button.addEventListener('click', displayOperator)));

// Evaluate expression when 'equals' button is pressed
function calculate() {
  display.textContent = Math.round(operate(a, operator, b) * Math.pow(10, 5)) / Math.pow(10, 5);
  decimalBtn.disabled = false;
  a = '';
  operator = '';
  b = '';
}

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener('click', () => {
  if ((a !== '') && (operator !== '') && (b !== '')) calculate();
});

// Clear the screen when 'clear' button is pressed
function clear() {
  display.textContent = 0;
  a = '';
  operator = '';
  b = ''; 
  decimalBtn.disabled = false;

  console.log(`a: ${a} operator: ${operator} b: ${b}`)
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', clear);

// Delete and undo last operation with backspace
function backspace() {
  if (b !== '') {
    b = b.slice(0, -1);
  } else if (operator !== '') {
    operator = '';
  } else if (a !== '') {
    a = a.slice(0, -1);
  } else { 
    console.log(`a: ${a} operator: ${operator} b: ${b}`);
    return; 
  }

  if (display.textContent.slice(-1) === '.') decimalBtn.disabled = false;

  let newText = display.textContent.slice(0, -1);
  display.textContent = (newText.length === 0) ? 0 : newText;

  console.log(`a: ${a} operator: ${operator} b: ${b}`)
}

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener('click', backspace);