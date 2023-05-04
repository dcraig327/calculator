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
      display.textContent = this.textContent;
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
