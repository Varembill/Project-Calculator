
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
digit.addEventListener("keydown", enterNumber);
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
    if (finalResult === 0) {
        finalResult = +currentValue;
    }

    
    // operationDisplay.push(currentValue + " +");
    
    
    finalResult += +currentValue;

    currentValue = '';

    console.log(finalResult);
    console.log(operationDisplay);

    displayResult();
    
  } else if (btn2 === "-") {
        
    // operationDisplay.push(currentValue + " -");
    
    finalResult += +currentValue;

    currentValue = '';

    console.log(finalResult);
    console.log(operationDisplay);

    displayResult();


  } else if (btn2 === "*") {

  } else if (btn2 === "/") {
    
  }

};


  reset.addEventListener("click", () =>{
    currentValue = '';
    finalResult = 0;
    firstValue = 0;
    screen.textContent = '0';
    operationDisplay = [];
    
  })


function displayResult () {
  // screen.textContent = finalResult;
  screen.textContent = operationDisplay.join(" ");
}

function displayOperation () {

}

function displayFinalResult () {
  screen.textContent = finalResult + +currentValue;
}
