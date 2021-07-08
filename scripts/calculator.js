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

digits = document.querySelectorAll('#digits > button');
display = document.querySelector('#result');

digits.forEach((digit) => digit.addEventListener('click',
(e) => display.textContent += e.target.textContent ));
