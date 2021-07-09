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
let opClick;

//Displaying Numbers
digits.forEach((digit) => digit.addEventListener('click',
(e) => {

  if(opClick){
    opClick = false;
    display.textContent = '';
  }

  display.textContent += e.target.textContent;

}));


operations.forEach((operation) => operation.addEventListener('click',
(e) => {

  if(!opClick){
    opClick = true;
    if(!firstNum){
      firstNum = display.textContent;
      operator = e.target.textContent;
    } else {
      secondNum = display.textContent;
      display.textContent = operate(operator, +firstNum, +secondNum);
      firstNum = display.textContent;
      operator = e.target.textContent;
    }
  }

}));
