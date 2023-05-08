//set character length and round numbers to fit
//css for proper character size

let DEBUG = true;
let display = undefined;

firstNumberString = undefined;
operator = undefined;
secondNumberString = undefined;

////////////////////////////////////////////////////////////////////////////////
if (!DEBUG) {
  console.assert = function () {};
  console.log = function () {};
}

function roundTo(n, digits) {
  if (digits === undefined) {
    digits = 0;
  }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return Math.round(n) / multiplicator;
}

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
  divideByZero = false;
  result = 0;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      if (b == 0) {
        divideByZero = true;
      } else {
        result = divide(a, b);
      }
      break;
    default:
      console.log("Not a valid operator.");
      return;
  }
  if (divideByZero) {
    resetOperation();
    render("Why U Mad? It Only Game.");
  } else {
    render(String(result));
  }
  return result;
}

// if argument is passed, that is saved as firstNumber,operator
function resetOperation() {
  if (arguments[0]) {
    firstNumberString = arguments[0];
  } else {
    firstNumberString = "0";
  }
  if (arguments[1]) {
    operator = arguments[1];
  } else {
    operator = undefined;
  }
  secondNumberString = undefined;
}

function clearDisplay() {
  resetOperation();
  render(firstNumberString);
}

function calculate() {
  a = Number(firstNumberString);
  b = Number(secondNumberString);
  result = operate(a, operator, b);
  console.log(`calculate(${a}, ${operator}, ${b}) = ${result}`);
  return result;
}

function pressCalculate() {
  if (operator) {
    if (secondNumberString === undefined) {
      secondNumberString = firstNumberString;
    }
    result = calculate();
    resetOperation(result);
  }
}

function pressNumber(numberPressedString) {
  // 10 is raddix to allow leading with a 0 on old browsers
  outputString = undefined;

  if (operator) {
    if (secondNumberString && secondNumberString != 0) {
      secondNumberString += numberPressedString;
    } else {
      secondNumberString = numberPressedString;
    }
    outputString = secondNumberString;
  } else {
    if (firstNumberString && firstNumberString != 0) {
      firstNumberString += numberPressedString;
    } else {
      firstNumberString = numberPressedString;
    }
    outputString = firstNumberString;
  }

  render(outputString);
}

function pressOperator(operatorPressed) {
  if (operator) {
    if (secondNumberString === undefined) {
      secondNumberString = firstNumberString;
    }
    result = calculate();
    resetOperation(result, operatorPressed);
  } else {
    operator = operatorPressed;
  }
}

function logGlobalVariables() {
  console.log(
    `a:${firstNumberString}\top:${operator}\tb:${secondNumberString}`
  );
}

function render(string) {
  // if (string.length > 8) {
  //   console.log(string);
  //   number = Number(string, 10);
  //   console.log(number);
  //   number = roundTo(number, 8);
  //   console.log(number);
  //   string = String(number);
  //   console.log(string);
  // }
  display.textContent = string;
}

function pressDecimal() {
  if (operator) {
    if (!secondNumberString.includes(".")) {
      secondNumberString += ".";
    }
  } else {
    if (!firstNumberString.includes(".")) {
      firstNumberString += ".";
      render(firstNumberString);
    }
  }
}

function buttonPress() {
  console.group(`INPUT:${this.textContent}`);
  logGlobalVariables();
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
    case ".":
      pressDecimal();
      break;
    case "+/-":
      break;
    case "%":
      break;
    case "1/x":
      break;
    case "/":
    case "*":
    case "-":
    case "+":
      pressOperator(this.textContent);
      break;
    case "=":
      pressCalculate();
      break;
    case "C":
      clearDisplay();
      break;
    default:
      break;
    //invert
    //percent
    //decimal
  }
  logGlobalVariables();
  console.groupEnd();
}

function init() {
  display = document.querySelector(".display");
  clearDisplay();

  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", buttonPress);
  });
}

////////////////////////////////////////////////////////////////////////////////
init();
