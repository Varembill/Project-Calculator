
let firstValue = 0;
let currentValue = '';
let finalResult = 0;
let operationDisplay = [];

// const operationDisplayString = operationDisplay.join(" ");

// UI interaction logic
const digit = document.querySelector(".digit-buttons");
const screen = document.querySelector(".calculator-screen");
const reset = document.querySelector(".reset-button");
const decimal = document.querySelector(".decimal-button");
const operators = document.querySelector(".operation-button");
const equal = document.querySelector(".result-button");

// Event Listener 
digit.addEventListener("click",enterNumber );
// digit.addEventListener("keydown", enterNumber);
operators.addEventListener("click",operate)
equal.addEventListener("click",displayFinalResult)

function enterNumber(e) {
  const btn = e.target.closest('button');
    if (btn) {
      currentValue += btn.textContent;
      screen.textContent = currentValue;

      //logging the currentValue
      //console.log(currentValue);

    }

};

function operate(element) {
  const btn2 = element.target.closest('button').textContent;
  if (btn2 === "+") {
    if (currentValue === '') { // nếu input ban đầu bằng rỗng thì final result = 0, bỏ biến firstValue
        finalResult = finalResult + 0;
    } else {
      Adding(+currentValue);
    };
  } else if (btn2 === "-") {
        if (firstValue === 0) {
        firstValue = +currentValue;
        currentValue = '';
    } else {
      Minus(+currentValue);
    }
  } else if (btn2 === "*") {

  } else if (btn2 === "/") {
    
  }

};


reset.addEventListener("click", () =>{
    currentValue = '';
    finalResult = 0;
    firstValue = 0;
    screen.textContent = '0';
  });

function Adding(number) {
    firstValue += number;
    currentValue = '';
};
function Minus(number) {
    firstValue -= number;
    currentValue = '';
}

function displayResult () {
  // screen.textContent = finalResult;
  screen.textContent = operationDisplay.join(" ");
}

function displayOperation () {

}

function displayFinalResult () {

}
