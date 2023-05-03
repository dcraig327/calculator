function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b) {
  return a/b;
}



//first number, the operator, and the second number
let inputFirstNumber = "";
let inputOperator = "";
let inputSecondNumber = "";

function operate(a, operator, b) {
  switch(operator) {
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case '*':
      return multiply(a,b);
      break;
    case '/':
      return divide(a,b);
      break;
    default:
      console.log("Not a valid operator.");
      break;
  }
}