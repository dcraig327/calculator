let display;

////////////////////////////////////////////////////////////////////////////////
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

function operate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.log("Not a valid operator.");
      break;
  }
}

firstNumber = [];
operator = undefined;
secondNumber = [];

function pressNumber(number) {
  // 10 is raddix to allow leading with a 0 on old browsers
  if (!operator) {
    firstNumber.push(Number(number, 10));
    display.textContent = firstNumber.join("");
  } else {
    secondNumber.push(Number(number, 10));
    display.textContent = secondNumber.join("");
  }
}

function resetOperation() {
  firstNumber = [];
  operator = undefined;
  secondNumber = [];
}

function clearDisplay() {
  display.textContent = "";
  resetOperation();
}

function pressCalculate() {
  result = operate(
    Number(firstNumber.join(""), 10),
    operator,
    Number(secondNumber.join(""), 10)
  );
  resetOperation();
  display.textContent = String(result);
}

function buttonPress() {
  switch (this.textContent) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      pressNumber(this.textContent);
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      operator = this.textContent;
      break;
    case "=":
      pressCalculate();
      break;
    case "C":
      clearDisplay();
      break;
    default:
      break;
  }
}

function init() {
  display = document.querySelector(".display");

  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
  });
}

////////////////////////////////////////////////////////////////////////////////
init();
