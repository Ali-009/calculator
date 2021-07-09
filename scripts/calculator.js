function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mul(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

function operate(operator, a, b){
  switch(operator){
    case "+": return add(a, b);
    case "-": return sub(a, b);
    case "*": return mul(a, b);
    case "/": return div(a, b);
  }
}

let display = document.querySelector('#result');
let digits = document.querySelectorAll('#digits > button');
let operations = document.querySelectorAll('#operations > button');

//operands and operator
let firstNum;
let secondNum;
let operator;
//boolean to check if operation has been clicked
let operationClicked;

//Displaying Numbers
digits.forEach((digit) => digit.addEventListener('click',
(e) => {

  if(operationClicked){
    operationClicked = false;
    display.textContent = '';
  }

  display.textContent += e.target.textContent;

}));


operations.forEach((operation) => operation.addEventListener('click',
(e) => {

  if(operationClicked){
    operator = e.target.textContent;
  }

  if(!operationClicked){
    operationClicked = true;
    if(!firstNum){
      firstNum = display.textContent;
      operator = e.target.textContent;
    } else {

      secondNum = display.textContent;

      if(+secondNum === 0 && operator === "/"){
        display.textContent = `Error at (${firstNum} ${operator} ${secondNum}):
        Can't divide by zero. Operation will be restarted.`;
        firstNum = '';
        secondNum = '';
        operator = '';
        return;
      }

      let currentResult = operate(operator, +firstNum, +secondNum);
      display.textContent = currentResult;
      firstNum = currentResult;
      operator = e.target.textContent;
    }
  }

}));


let equals = document.querySelector('#equals');

equals.addEventListener('click', (e) => {
  if(!operationClicked && firstNum){
    operationClicked = true;
    secondNum = display.textContent;

    if(+secondNum === 0 && operator === "/"){
      display.textContent = `Error at (${firstNum} ${operator} ${secondNum}):
      Can't divide by zero. Operation will be restarted.`;
      firstNum = '';
      secondNum = '';
      operator = '';
      return;
    }

    display.textContent = operate(operator, +firstNum, +secondNum);

    //clear the operations
    firstNum = '';
    secondNum = '';
    operator = '';
  }
});

let clear = document.querySelector('#clear');

clear.addEventListener('click', (e) => {
  firstNum = '';
  secondNum = '';
  operator = '';

  display.textContent = '';
});

let undo = document.querySelector('#undo');

undo.addEventListener('click', (e) => {
  if(!operationClicked){
    display.textContent = display.textContent.slice(0, -1);
  }
})
